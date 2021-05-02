import './General.css'
import React from 'react'

class Port extends React.Component {
	render(){
		return (
			<div className="Port Container" id="Port">
				<h3>Portfolio</h3>
				<div className="Port-set-item-container">
					<a href="/nice-resume/ref/smePort.pdf" target="_blank" className="Item-container">
						<img src="/nice-resume/ref/smeEx.png" alt=""/>
						<span className="center-end">SME Management project</span>
					</a>
					<div className="Item-container">
					<a href="/nice-resume/ref/kmitlUIDesign.pdf" target="_blank" className="Item-container">
						<img src="/nice-resume/ref/kmitl-event-admin.jpg" alt=""/>
						<span className="center-end">KMITL EVENT UI design</span>
					</a>
					</div>
					<div className="Item-container center">
						Pet blood bank report
					</div>
				</div>
			</div>
    )
  }
}

export default Port