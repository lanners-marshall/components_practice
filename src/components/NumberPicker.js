import React from 'react'

class NumberPicker extends React.Component {
	constructor(){
		super()
		this.state = {
			number: 15
		}
	}

	up = () => {
		const {number} = this.state
		this.setState({number: number + 1})
	}

	down = () => {
		const {number} = this.state
		this.setState({number: number - 1})
	}


	render(){

		const {number} = this.state

		return(
			<div className="flexSection">
				<div>{number}</div>
				<div className="flexBox marginLeft">
					<div onClick={this.down}>down</div>
					<div onClick={this.up} className="marginLeft">up</div>
				</div>
			</div>
		)
	}
}

export default NumberPicker