import React from 'react';

class Table extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}

	render(){
		return (
			<table>
				<caption>A complex table</caption>
				<thead>
					<tr>
						<th colSpan="3">Invoice #1234567</th>
						<th>14th January 2025</th>
					</tr>
					<tr>
						<td colSpan="2">
							<strong>Pay to: </strong><br/>
							Acme Billing Co.<br/>
							123 main st.<br/>
							Cityville, NA 12345
						</td>
						<td colSpan="2">
							<strong>Customer:</strong><br/>
							John Smith<br/>
							321 Willow Way<br/>
							Southeast Northwestershire, MA 54321
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Name / Description</th>
						<th>Qty.</th>
						<th>@</th>
						<th>Cost</th>
					</tr>
					<tr>
						<td>Paperclips</td>
						<td>1000</td>
						<td>0.01</td>
						<td>10.00</td>
					</tr>
					<tr>
						<td>Staples (box)</td>
						<td>100</td>
						<td>1.00</td>
						<td>100.00</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th colspan="3">Subtotal</th>
						<td>100.00</td>
					</tr>
					<tr>
						<th colspan="2">Tax</th>
						<td>8%</td>
						<td>8.80</td>
					</tr>
					<tr>
						<th colspan="3">Grand Total</th>
						<td>$ 118.80</td>
					</tr>
				</tfoot>
			</table>
		)
	}
}

export default Table












