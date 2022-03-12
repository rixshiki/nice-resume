import './App.css';
import React from 'react';
import Nav from './Nav/Nav';
import About from './Item/About';
import Skill from './Item/Skill';
import Port from './Item/Port';
import Exp from './Item/Exp';
import Edu from './Item/Education';
import Footer from './Item/Footer';
import $ from 'jquery'

class App extends React.Component {
  componentDidMount() {

    // Navigator Bar yellow line active read by current scroll position
    $(document).on('scroll', () => {
      let currentScroll = window.scrollY,
        AboutContainerPosition = 0,
        SkillContainerPosition = $('#Skill').position().top - 60,
        PortContainerPosition = $('#Port').position().top - 60,
        ExpContainerPosition = $('#Exp').position().top - 60,
        EduContainerPosition = $('#Edu').position().top - 60,
        ContactContainerPosition = $(document).height() - $(window).height() - 2
      let listContainerPosition =
        [AboutContainerPosition, 
          SkillContainerPosition, 
          PortContainerPosition,
          ExpContainerPosition, 
          EduContainerPosition, 
          ContactContainerPosition]
      let n = 1

      $('.Nav-grid li a').removeClass("active")
      listContainerPosition.forEach((element, index) => {
        if (currentScroll >= element) n = index + 1
      });
      $('.Nav-grid li:nth-child(' + n + ') a').addClass("active");
    })
  }

  openNav() {
    document.getElementById("Nav").style.visibility = "visible"
    document.getElementsByClassName("Icon-nav")[0].style.visibility = "hidden"
    document.getElementsByClassName("Icon-back")[0].style.visibility = "visible"
  }
  closeNav() {
    document.getElementById("Nav").style.visibility = "hidden"
    document.getElementsByClassName("Icon-nav")[0].style.visibility = "visible"
    document.getElementsByClassName("Icon-back")[0].style.visibility = "hidden"
  }

  render() {
    return (
      <div className="App center">
        <img className="Icon-nav" src="/nice-resume/img/icon-navbar.png" onClick={this.openNav} />
        <img className="Icon-back" src="/nice-resume/img/icon-back.png" onClick={this.closeNav} />
        <Nav />
        <About />
        <Skill />
        <Port />
        <Exp />
        <Edu />
        <Footer />
      </div>
    );
  }
}

export default App;
