import './General.css'
import React from 'react'

class Exp extends React.Component {
	render(){
	  return (
		  <div className="Exp Container" id="Exp">
				<h3>Experience</h3>
				<div className="Item-container center-top">
					<div className="Exp-column">
						<h4>Pet Blood Bank Report</h4>
						<h5>REPORT EVERY DAY DATA FOR EACH HOSPITAL IN COMMUNITY</h5>
						Front-end : Vue.js <br/>
						Back-end : Django Python <br/>
						Database : MySQL <br/>
						<center><i>( Intership with KMITL )</i></center>
					</div>
					<div className="Exp-column">
					<h4>sme Management Project</h4>
					<h5>WEBSITE FOR SME CONVENIENT</h5>
						Front-end : HTML CSS JS <br/>
						Back-end : Java Spring boot <br/>
						Database : MySQL <br/>
						<center><i>( Graduate project )</i></center>
					</div>
				</div>
		  </div>
	  )
  }
}

export default Exp