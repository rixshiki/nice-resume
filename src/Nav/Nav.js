import React from 'react'
import '../App.css'
import './Nav.css'

class Nav extends React.Component {
  render(){
    return (
			<div className="Nav" id="Nav">
				<div className="Home"><a href="/nice-resume/">Chuenjit</a></div>
				<ul className="Nav-grid">
					<li><a href="#About" className="active">About</a></li>
					<li><a href="#Skill">Skill</a></li>
					<li><a href="#Port">Portfolio</a></li>
					<li><a href="#Exp">Experience</a></li>
					<li><a href="#Edu">Education</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			</div>
    )
  }
}

export default Nav