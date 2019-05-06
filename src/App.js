import React from 'react';
import SearchBar from './components/SearchBar'

const names = [
	'Marshall',
	'stan',
	'Sara Ann',
	'tiffany',
	'Mitchel',
	'Roberto',
	"Ann Mary",
	'Xue'
]

function App() {
  return (
    <div className="app">
    	<h1>Components Practice</h1>
    	<SearchBar names={names}/>
    </div>
  );
}
export default App;
