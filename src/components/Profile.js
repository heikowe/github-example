import React from 'react'
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import getGithubInfo from '../utils/helpers';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bio: {},
      repos: []
    }
  }
  componentDidMount(){
    this.init(this.props.username)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.init(nextProps.username);
  }
  init(username){
    getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.username} bio={this.state.bio} />
        </div>
        <div className="col-md-8">
          <Repos username={this.props.username} repos={this.state.repos}/>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
	username: PropTypes.string.isRequired
}

export default Profile;
