import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import process from 'dotenv' 

function GitHubRepositories() {
    // console.log(process.env.GITHUB_NEXT_API);
    const accessToken = 'ACCESS_TOKEN_APNA_DAAL' ;

    // Define state to hold the fetched repositories, their languages, and star counts
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        // Fetch data from the GitHub API
        axios.get('https://api.github.com/repositories', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(async (response) => {
            const fetchedRepositories = response.data;

            // Fetch languages and stars for each repository
            const repositoriesWithData = await Promise.all(fetchedRepositories.map(async repo => {
                // Fetch languages
                const languagesResponse = await axios.get(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const languages = Object.keys(languagesResponse.data);

                // Fetch star count
                const starResponse = await axios.get(repo.stargazers_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const starCount = starResponse.data.length;

                return { ...repo, languages, starCount };
            }));

            // Update state with repositories, their languages, and star counts
            setRepositories(repositoriesWithData);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
    }, []);

    return (
        <div>
            <h1>GitHub Repositories</h1>
            <ul>
                {/* Map through the repositories array and render each repository */}
                {repositories.map(repository => (
                    <li key={repository.id}>
                        <h2>{repository.name}</h2>
                        <p>Description: {repository.description}</p>
                        <p>Owner: {repository.owner.login}</p>
                        {/* Join the array of languages into a string */}
                        <p>Languages: {repository.languages.join(', ')}</p>
                        {/* Display star count */}
                        <p>Stars: {repository.starCount}</p>
                        {/* Add more details as needed */}

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GitHubRepositories;
