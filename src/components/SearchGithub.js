import React from 'react';
import Profile from '../components/Profile';

class SearchGithub extends React.Component {

	constructor(props) {
		super(props);
		this.state = {username: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getRef(ref){
		this.usernameRef = ref;
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.usernameRef.value);
		this.setState({username: this.usernameRef.value});
		event.preventDefault();
	}

  render(){
    return (
      <div className="searchGitHub">
		  <div className="col-sm-3 form-group" style={{marginTop: 15}}>
			<form onSubmit={this.handleSubmit}>
				<input type="text" className="form-control input-md" ref={(ref) => this.getRef(ref)} />
				<br/>
				<button type="submit" className="btn btn-primary btn-md">Search Github</button>
			</form>
		  </div>
		  <div className="col-sm-9" style={{marginTop: 15}}>
		  	{this.state.username ? <Profile username={this.state.username} /> : ''}
		  </div>
	  </div>
    )
  }
}

export default SearchGithub;