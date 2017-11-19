import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserProfile from './../UserProfile';

const userProfileTestData = {
	"login": "maxmu",
	"avatar_url": "https://avatars0.githubusercontent.com/u/25481546?v=4",
	"name": "Max Mustermann",
	"email": "max@mustermann.de",
	"location": "Germany",
	"company": "Muster Company",
	"followers": 20,
	"following": 32
}

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<UserProfile bio={userProfileTestData}/>, div);
});

it('creates/compares snapshot for UserProfile', () => {
	const component = renderer.create(
		<UserProfile bio={userProfileTestData}/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});