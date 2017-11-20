import React from 'react';
import reactLogo from './reactLogo.png';

export default function Home() {
	return (
		<div>
			<h2 className="text-center">
				React HandsOn Session
			</h2>
			<br/>
			<div className="row">
				<div className="col-md-4">
					<img src={reactLogo} alt="React Logo" className="img-thumbnail"/>
				</div>
				<div className="col-md-4">
					<p>
						Wikipedia:
						React ist eine JavaScript-Softwarebibliothek[3], die ein Grundgerüst für die Ausgabe von
						User-Interface-Komponenten von Webseiten zur Verfügung stellt (Webframework). Komponenten werden
						in
						React hierarchisch aufgebaut und in dessen Syntax als selbst definierte HTML-Tags
						repräsentiert.[4] Das
						Modell von React verspricht durch die Konzepte des unidirektionalen Datenflusses und des
						"Virtual Dom"
						den einfachen, aber trotzdem performanten Aufbau auch komplexer Anwendungen. React bildet
						typischerweise
						die Basis für Single-Page-Webanwendungen, kann jedoch auch mittels Node.js serverseitig
						(vor-)gerendert
						werden.
					</p>
				</div>
			</div>
		</div>
	)
}
