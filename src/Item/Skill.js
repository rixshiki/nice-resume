import './General.css'
import React from 'react'

class Skill extends React.Component {
	render(){
		return (
			<div className="Skill Container" id="Skill">
				<div>
					<h3>Programming Skill</h3>
					<ul className="Item-container">
						<li>Vue.js, React.js</li>
						<li>Java</li>
						<li>Python</li>
						<li>HTML, CSS, JS</li>
						<li>SQL</li>
					</ul>
				</div>
				<div>
					<h3>Soft Skill</h3>
					<ul className="Item-container">
						<li>Adaptability</li>
						<li>Punctual</li>
						<li>Disciplined</li>
						<li>Time-management</li>
						<li>Deferential</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Skill