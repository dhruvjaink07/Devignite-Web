import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitHubRepositories() {
    const accessToken = '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';
    const [repositories, setRepositories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('https://api.github.com/repositories', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(async (response) => {
            const fetchedRepositories = response.data;

            const repositoriesWithData = await Promise.all(fetchedRepositories.map(async repo => {
                const languagesResponse = await axios.get(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const languages = Object.keys(languagesResponse.data);

                const starResponse = await axios.get(repo.stargazers_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const starCount = starResponse.data.length;

                return { ...repo, languages, starCount };
            }));

            setRepositories(repositoriesWithData);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRepositories = repositories.filter(repo => {
        return repo.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search repositories"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="row mt-3">
                {filteredRepositories.map(repository => (
                    <div key={repository.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{repository.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Owner: {repository.owner.login}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{repository.owner.avatar_url}</h6>
                                {/* <p className="card-text">Description: {repository.description}</p> */}
                                <p className="card-text">Languages: {repository.languages ? repository.languages.join(', ') : 'N/A'}</p>
<p className="card-text">Stars: {repository.starCount}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                    {
                        `.card {
                            height: 250px; /* Set a fixed height for all cards */
                            overflow: hidden; /* Hide overflow text */
                          }
                          
                          .card-body {
                            overflow: hidden;
                            text-overflow: ellipsis; /* Show ellipsis for overflow text */
                          }`
                    }
            </style>
        </div>
    );
}

export default GitHubRepositories;
