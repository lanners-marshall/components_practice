import React from 'react';

class NavTabs extends React.Component {
	constructor(){
		super()
		this.state = {
			tabs: ['tab1', 'tab2', 'tab3'],
			selected: 'tab1'
		}
	}

	setActive = (tab) => {
		this.setState({
			selected: tab
		})
	}

	render(){

		const {tabs, selected} = this.state

		return(
			<ul className="flexBox">
				{tabs.map((tab, i) => {
					return (
						<li 
							key={i} 
							style={selected === tab ? {backgroundColor: 'red'} : null }
							onClick={()=> {this.setActive(tab)}}>
							{tab}
						</li>
					)
				})}
			</ul>
		)
	}
}

export default NavTabs