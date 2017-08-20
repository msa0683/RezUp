// Include the Main React Dependencies
var React = require('react'); 
var ReactDOM = require('react-dom');

// Include the Main Component
import Main from './Components/Main'; 
// import style from '../public/style.js'; 

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<Main />,
	document.getElementById('app')
)