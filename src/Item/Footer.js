import './General.css'
import React from 'react'

class Footer extends React.Component {
	render(){
	  return (
			<div className="Footer" id="Contact">
				<div>
				<h4>Contact</h4>
				<table>
					<tr>
						<td>Phone :</td><td>(+66) 080 915 9657</td>
					</tr>
					<tr>
						<td>E-mail :</td><td>cheunjitnice@gmail.com</td>
					</tr>
					<tr>
						<td>Line :</td><td>@tijnuehc</td>
					</tr>
					<tr>
						<td>Facebook :</td><td>Chuenjit Nice</td>
					</tr>
					<tr>
						<td>Instagram :</td><td>tijnuehc</td>
					</tr>
				</table>
				</div>
			</div>
		)
  }
}

export default Footer