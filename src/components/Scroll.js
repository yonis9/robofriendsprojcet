import React from 'react';
import Scrollable from 'hide-scrollbar-react';

const Scroll = (props) => {
	return (
		<Scrollable style= {{borderTop: '5px double black', borderBottom: '5px double black'}}>
		<div style= {{height: '70vh'}}>
		{props.children}
		</div>
		</Scrollable>
		)
}

export default Scroll;