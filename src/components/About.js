import React from 'react';
import about from './about.jpg';

export default function About() {
	return (
		<div>
			<h2 className="text-center">
				About us
			</h2>
			<br/>
			<div className="row">
				<div className="col-md-4">
					<img src={about} alt="about us" className="img-thumbnail"/>
				</div>
				<div className="col-md-4">
					<p>
						Erdal Demirtas<br/>
						<a href="mailto:erdal.demirtas@cgi.com">erdal.demirtas@cgi.com</a><br/><br/>
						Heiko Wenninger<br/>
						<a href="mailto:heiko.wenninger@cgi.com">heiko.wenninger@cgi.com</a>
					</p>
					<a href="https://www.de.cgi.com/" target="_blank" rel="noopener noreferrer">
						<img src="https://www.de.cgi.com/sites/all/themes/cgi/logo.png" alt="cgi logo"/>
					</a>
				</div>
			</div>
		</div>
	)
}
