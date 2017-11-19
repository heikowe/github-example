import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({bio}) => {
  return (
     <div className="col-md-4">
       <ul>
		   {bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} alt="avatar" className="img-rounded img-responsive"/></li>}
		   {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
		   {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
		   {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
		   {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
		   {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
		   {bio.followers > 0 && <li className="list-group-item">Followers: {bio.followers}</li>}
		   {bio.following > 0 && <li className="list-group-item">Following: {bio.following}</li>}
		   {bio.public_repos && <li className="list-group-item">Public Repos: {bio.public_repos}</li>}
		   {bio.blog && <li className="list-group-item">Blog: <a href={bio.blog}> {bio.blog}</a></li>}
       </ul>
    </div>
  )
}

UserProfile.propTypes = {
  bio: PropTypes.object.isRequired
}

export default UserProfile
