import React from 'react'

class TableTwo extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		} 
	}

	render(){

		const {data} = this.props

		return (
			<div>
				sort by state, sort by last name, sort by first name, asc, decs for all
				<table>
					<tr>
						<th colSpan={2}>Name</th>
						<th colSpan={2}>Address</th>
						<th ColSpan={2}>Contact</th>
					</tr>
					<tr>
						<th>First</th>
						<th>Last</th>
						<th>city/street</th>
						<th>State</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
					{data.map((info, i) => {
						return (
							<tr key={i}>
								<td>{info.first}</td>
								<td>{info.last}</td>
								<td>{info.address}</td>
								<td>{info.state}</td>
								<td>{info.email}</td>
								<td>{info.phone}</td>
							</tr>
						)
					})}
				</table>
			</div>
		)
	}
}

export default TableTwo