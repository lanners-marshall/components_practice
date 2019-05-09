import React from 'react';
import SearchBar from './components/SearchBar';
import DropDownList from './components/DropDownList';
import MultiSelect from './components/MultiSelect';
import NumberPicker from './components/NumberPicker';
import ToDoList from './components/ToDoList';
import hoc from './components/hoc';
import Table from './components/Table';
import NavTabs from './components/NavTabs';
import DynamicTable from './components/DynamicTable';
import TableTwo from './components/TableTwo';


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

const data = [
  {first: 'Marshall', last: 'Lanners', address: 'Seattle, 1510 23rd ave', state: 'WA', email: 'lanners@yahoo.com', phone: '206-475-7021'},
  {first: 'Kevin', last: 'Johnson', address: 'Los Angeles, 122e 9th ave', state: 'CA', email: 'Johnson@yahoo.com', phone: '206-555-7021'},
  {first: 'Sara', last: 'Hill', address: 'San Fransico, 2355 21rd ave', state: 'CA', email: 'Hill@yahoo.com', phone: '206-900-9121'},
  {first: 'Stef', last: 'Xue', address: 'Austin, 9900 3rd ave', state: 'TX', email: 'Xue@yahoo.com', phone: '206-475-7021'},
  {first: 'Gil', last: 'Roberts', address: 'Seattle, 1212 2rd ave', state: 'WA', email: 'Roberts@yahoo.com', phone: '206-555-7021'},
  {first: 'Melvin', last: 'Russle', address: 'Houston, 1122 13rd ave', state: 'TX', email: 'Russle@yahoo.com', phone: '112-475-555'},
  {first: 'Roberto', last: 'Yelvin', address: 'Seattle, 7878 29rd ave', state: 'WA', email: 'Yelvin@yahoo.com', phone: '900-444-1211'},
  {first: 'Russle', last: 'James', address: 'Los Angeles, 1233 8rd ave', state: 'CA', email: 'James@yahoo.com', phone: '112-889-4222'},
  {first: 'Michel', last: 'Bilbon', address: 'Denver, 9989 11rd ave', state: 'CO', email: 'Bilbon@yahoo.com', phone: '889-112-0091'},
  {first: 'Erica', last: 'Hammil', address: 'Washington, 8922 4rd ave', state: 'WA', email: 'Hammil@yahoo.com', phone: '2323-112-5555'},
  {first: 'Thor', last: 'thunder', address: 'Kent, 9090 3rd ave', state: 'WA', email: 'thunder@yahoo.com', phone: '221-544-9900'},
  {first: 'Spider', last: 'Man', address: 'Los Osos, 6656 10rd ave', state: 'CA', email: 'Man@yahoo.com', phone: '112-333-6666'},
  {first: 'Gillbert', last: 'Gillington', address: 'Seattle, 6896 12rd ave', state: 'WA', email: 'Gillington@yahoo.com', phone: '112-444-6556'},
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
	    	<Table />
	    	<NavTabs/>
	    </div>
	    <div className="flexBox separator">
	    	<DynamicTable />
	    	<TableTwo data={data}/>
	    </div>
    </div>
  );
}
export default App;
