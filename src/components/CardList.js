import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOOOO!');
	// }
	const cardComponent = robots.map((user, i) => {
		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	return (
		<div>
		{cardComponent}
		</div>
	);
}

export default CardList;
