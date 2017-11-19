import React from 'react'
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import getGithubInfo from '../utils/helpers';
import PropTypes from 'prop-types';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bio: {},
			repos: []
		}
	}

	componentDidMount() {
		this.init(this.props.username)
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.init(nextProps.username);
	}

	init(username) {
		getGithubInfo(username)
			.then(function (data) {
				this.setState({
					bio: data.bio,
					repos: data.repos
				})
			}.bind(this))
	}

	render() {
		return (
			<div className="row">
				<UserProfile username={this.props.username} bio={this.state.bio}/>
				<Repos username={this.props.username} repos={this.state.repos}/>
			</div>
		)
	}
}

Profile.propTypes = {
	username: PropTypes.string.isRequired
}

export default Profile;
