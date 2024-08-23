import React from 'react'

// importing HighOrder file 

import Gfg from './Gfg'

class Gfgok extends React.Component { 
render() { 
	// Destructuring the props 
	const { show, handleclick } = this.props 

	// Calling out the props 
	return <button onClick={handleclick}>{show} 
	</button> 
} 
} 


export default Gfg(Gfgok);
