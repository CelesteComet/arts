import React from 'react';

function VenueItem(props) {
	var venue = props.item;
	return (
		<div className='venu-item'>
			<p>{ venue.name }</p>
			<p>{ venue.location }</p>
			<p>{ venue.start_datetime }</p>
			<p>{ venue.end_datetime }</p>
		</div>
	)
}

export default VenueItem;