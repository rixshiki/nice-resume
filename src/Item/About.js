import './General.css'
import React from 'react'

class About extends React.Component {
  render(){
    return (
			<div className="About Container" id="About">
				<div className="Item-container">
				<div className="About-left-column center-top">
					<img className="About-profile-pic" src="/nice-resume/img/Nice-pink-profile.jpg" />
					<div className="About-media">
						<a href="https://web.facebook.com/tijnuehc" target="_blank"><img src="/nice-resume/img/icon-fb.png" /></a>
						<a href="https://www.instagram.com/tijnuehc" target="_blank"><img src="/nice-resume/img/icon-ig.png" /></a>
						<a href="https://www.linkedin.com/in/chuenjit-visin-83b9041a3"><img src="/nice-resume/img/icon-linkedin.png" /></a>
					</div>
				</div>
				<div className="About-right-column">
					<div className="About-profile-head">
						<h1>Chuenjit Visin</h1>
						<h2>Software Engineering</h2>
					</div>
					<a href="/nice-resume/ref/ChuenjitVisinResumeSoftwareDev.pdf" className="downloadCV-btn" target="_blank">Download Resume</a>
					<table>
						<tr>
							<td>Age</td> <td>22</td>
						</tr>
						<tr>
							<td>Address</td> <td>30/2 m.11, Bangnampueng, Phrapradaeng, Samutprakarn</td>
						</tr>
						<tr>
							<td>E-mail</td> <td>cheunjitnice@gmail.com</td>
						</tr>
						<tr>
							<td>Phone</td> <td>080 915 9587</td>
						</tr>
					</table>
				</div>
				</div>
			</div>
		)
	}
}

export default About;