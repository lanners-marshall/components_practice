import React from 'react';
import ClickOutHandler from 'react-onclickout'


const FilteredNames = ({names, input, handleSelected}) => {
	return (
		<ul className="center">
			{names.filter((name) => {
				return name.toLowerCase().includes(input.toLowerCase())
			}).map((name, i) => {return <li key={i} onClick={() => {handleSelected(name)}}>{name}</li>})}
		</ul>
	)
}

const UnfilterNames = ({names, handleSelected}) => {
	return (
		<ul className="center">
			{names.map((name, i) => {
				return <li key={i} onClick={() => {handleSelected(name)}}>{name}</li>
			})}
		</ul>
	)
}

class DropDownList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			input: '',
			selected: this.props.names[0],
			showList: false
		}
	}

	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleList = () => {
		this.setState({
			showList: !this.state.showList
		})
	}

	handleSelected = (name) => {
		this.setState({
			selected: name,
			showList: !this.state.showList
		})
	}

	clickOut = () => {
		this.setState({
			showList: false
		})
	}

	render() {

		const {input, selected, showList} = this.state
		const {names} = this.props

		return (
			<ClickOutHandler onClickOut={this.clickOut}>
				<div>
					<div onClick={this.handleList} className="selectDrop">{selected}</div>
					{showList && <div className="dropDown">
						<input 
							name="input"
							value={input}
							onChange={this.handleInput}
							autoComplete="off"
						/>
						{input ? (
							<FilteredNames names={names} input={input} handleSelected={this.handleSelected}/>
							) : 
							<UnfilterNames names={names} handleSelected={this.handleSelected}/>
						}
						</div>
					}
				</div>
			</ClickOutHandler>
		)
	}
}

export default DropDownList