import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			search: ''
		}
	}

	handleText = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){

		const {names} = this.props
		const {search} = this.state

		return (
			<div>
				<input 
					name="search"
					value={search}
					onChange={this.handleText}
					autoComplete="off"
					placeholder="search Names"
				/>
				{search && <ul>
					{names.filter(name => { return name.toLowerCase().includes(search.toLowerCase())}).map((name, i) => {
						return <li key={i}>{name}</li>
					})}
					</ul>
				}
			</div>

		)
	}
}

export default SearchBar