import React from 'react';
import SearchBar from './components/SearchBar';
import DropDownList from './components/DropDownList';

const names = [
	'Marshall',
	'stan',
	'Sara Ann',
	'tiffany',
	'Mitchel',
	'Roberto',
	"Ann Mary",
	'Xue',
	'timmy',
	'tommon',
	"Jessica",
	"Sampson"
]

function App() {
  return (
    <div className="app">
    	<h1 className="center">Components Practice</h1>
    	<div className="flexBox">
	    	<SearchBar names={names}/>
	    	<DropDownList names={names} />
	    </div>
    </div>
  );
}
export default App;
