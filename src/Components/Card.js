import React from 'react';


const Card = (props) =>{
	const {name,email,id} = props;
	return(
		<div className="bg-light-green dib br3 pa2 grow ma2 bw2 shadow-5 tc">
			<img src={`https://robohash.org/${id}?set=100x100`} alt='pic' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;