import React from 'react'

const hoc = (Wrappedcomponent) => class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			counter: 0,
		}
	}

	upCounter = () => {
	  this.setState((prevState, props) => {
	    return { 
	        counter: prevState.counter + 1 
	    };
	  });
	}

	render(){
		return (
			<div>
				<Wrappedcomponent {...this.state} upCounter={this.upCounter}/>
			</div>
		)
	}
}

export default hoc