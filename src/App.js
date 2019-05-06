import React from 'react';
import SearchBar from './components/SearchBar';
import DropDownList from './components/DropDownList';
import MultiSelect from './components/MultiSelect';
import NumberPicker from './components/NumberPicker';
import ToDoList from './components/ToDoList';

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
	"Sampson",
	"Stannis",
	"Nicole",
	"Nick",
	"Merlin"
]

function App() {
  return (
    <div className="app">
    	<h1 className="center">Components Practice</h1>
    	<div className="flexBox separator">
	    	<SearchBar names={names}/>
	    	<DropDownList names={names} />
	    	<MultiSelect names={names} />
	    	<NumberPicker/>
	    	<ToDoList/>
	    </div>
    </div>
  );
}
export default App;
