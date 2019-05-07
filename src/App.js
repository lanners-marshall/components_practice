import React from 'react';
import SearchBar from './components/SearchBar';
import DropDownList from './components/DropDownList';
import MultiSelect from './components/MultiSelect';
import NumberPicker from './components/NumberPicker';
import ToDoList from './components/ToDoList';
import hoc from './components/hoc';


const Counter = ({counter, upCounter}) => {
	return (
		<div><p>{counter} <span onClick={upCounter}>UP</span></p></div>
	)
}

const CounterTwo = ({counter, upCounter}) => {
	return (
		<div><p>{counter} <span onClick={upCounter}>UP</span></p></div>
	)
}

const HOCounter = hoc(Counter)
const HOCounterTwo = hoc(CounterTwo)

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
	    <div className="flexBox separator">
	    	<HOCounter/>
	    	<HOCounterTwo/>
	    </div>
    </div>
  );
}
export default App;
