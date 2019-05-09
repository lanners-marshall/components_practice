import React from 'react';

class DynamicTable extends React.Component {
	constructor(){
		super()
		this.state = {
		}
	}

	render(){
		return(
			<table>
				<thead>
					<tr>
						<th colSpan={2}>Name</th>
						<th colSpan={2}>Address</th>
						<th rowSpan={2}>City</th>
						<th rowSpan={2}>State</th>
					</tr>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Street Line #1</th>
						<th>Street Line #2</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Marshall</td>
						<td>Lanners</td>
						<td>1510 23rd ave</td>
						<td>Apt 3</td>
						<td>Seattle</td>
						<td>WA</td>
					</tr>
					<tr>
						<td>Marshall</td>
						<td>Lanners</td>
						<td>1510 23rd ave</td>
						<td>Apt 3</td>
						<td>Seattle</td>
						<td>WA</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default DynamicTable