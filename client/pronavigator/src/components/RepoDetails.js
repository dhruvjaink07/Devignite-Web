import React from 'react';
import { useLocation } from 'react-router-dom';
import Askquestion from './AskQuestion';

function RepoDetails() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const name = query.get('name');
    const owner = query.get('owner');
    const avatar_url = query.get('avatar_url');
    const stars = query.get('stars');
    const languages = query.get('languages');
    const description = query.get('description');
    const html_url = query.get('html_url');

    const imageStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px'
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={avatar_url} alt="Owner Avatar" style={imageStyle} className="img-fluid rounded-circle mb-3" />
                    <h4>{owner}</h4>
                </div>
                <div className="col-md-8">
                    <h2>{name}</h2>
                    <p><strong>Languages:</strong> {languages ? languages.split(',').join(', ') : 'N/A'}</p>
                    <p><strong>Stars:</strong> {stars}</p>
                    <p><strong>Description:</strong> {description || 'No description available.'}</p>
                    <p>Repo URL: <a href={html_url}>{html_url}</a></p>
                    {/* Add more details as needed */}
                </div>
            </div>
            {/* <Askquestion></Askquestion> */}
        </div>
    );
}

export default RepoDetails;
