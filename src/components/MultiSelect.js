import React from 'react'
import ClickOutHandler from 'react-onclickout'

const DisplaySelected = ({selected, removeSelected }) => {
	return (
		<div>
			{selected.map((name, i) => {
				return <p key={i}>{name} <span onClick={()=>{removeSelected(name)}}>x</span></p>
			})}
		</div>
	)
}

const DisplayApproved = ({approvedNames, addSelected, showNames}) => {
	return (
		<div>
			{showNames && <div className="dropDown">
				<ul className="center">
					{approvedNames.map((name, i) => {
						return <li key={i} onClick={()=>{addSelected(name)}}>{name}</li>
					})}
				</ul>
				</div>
			}
		</div>
	)
}

class MultiSelect extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			input: '',
			selected: [],
			showNames: false
		}
	}

	handleInput = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	addSelected = (name) => {
		this.setState({
			selected: [...this.state.selected, name]
		})
	}

	removeSelected = (name) => {
		const {selected} = this.state
		let filterAr = selected.filter(n => { return n !== name})
		this.setState({selected: filterAr})
	}

	showNames = () => {
		const {selected} = this.state
		if (selected.length > 0){
			this.setState({showNames: true})
		} else {
			this.setState({showNames: !this.state.showNames})
		}
	}

	clickOut = () => {
		this.setState({
			showNames: false
		})
	}

	render(){

		const {input, selected, showNames} = this.state
		const {names} = this.props
		let check = new Set(selected)
		let approvedNames = names.filter(name => {return !check.has(name)})

		if (input) {
			approvedNames = approvedNames.filter(name => {
				return name.substring(0, input.length).toLowerCase() === input.toLowerCase()
			})
		}

		return (
			<ClickOutHandler onClickOut={this.clickOut}>

				<DisplaySelected selected={selected} removeSelected={this.removeSelected}/>

				<input
					name='input'
					value={input}
					onChange={this.handleInput}
					autoComplete="off"
					onClick={this.showNames}
				/>

				<DisplayApproved 
					approvedNames={approvedNames} 
					addSelected={this.addSelected} 
					showNames={showNames} />

			</ClickOutHandler>
		)
	}
}

export default MultiSelect