import React from 'react'

const hoc = (Wrappedcomponent) => class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			counter: 0,
		}
	}

	upCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render(){
		return (
			<div>
				<Wrappedcomponent counter={this.state.counter} upCounter={this.upCounter}/>
			</div>
		)
	}
}

export default hoc