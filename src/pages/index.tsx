import React from 'react';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import SectionBreak from '../components/SectionBreak';
import Contact from '../components/Contact';

import throttle from 'lodash/throttle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yPos: null,
      navbarFixed: false,
      currentNavItem: 0
    };
    this.viewportHeight = null;
    this.aboutY = null;
    this.portfolioY = null;
    this.contactY = null;
    this.updateYPosition = throttle(this.updateYPosition.bind(this), 200);
  }

  componentDidMount() {
    this.setState({yPos: window.scrollY});
    window.addEventListener('scroll', this.updateYPosition);
    let aboutRect = document.getElementById('about').getBoundingClientRect();
    let portfolioRect = document.getElementById('portfolio').getBoundingClientRect();
    let contactRect = document.getElementById('contact').getBoundingClientRect();
    this.viewportHeight = window.innerHeight;
    this.aboutY = Math.floor(aboutRect.y - (aboutRect.height / 2) - 250);
    this.portfolioY = Math.floor(portfolioRect.y - (portfolioRect.height / 2) - 100);
    this.contactY = Math.floor(contactRect.y - (portfolioRect.height / 2));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateYPosition);
  }

  componentDidUpdate(prevProps, prevState) {
    // Toggle Navbar visibility
    if (prevState.yPos - this.state.yPos >= 10) {
      this.setState({navbarFixed: true});
    } else if (this.state.yPos > prevState.yPos) {
      this.setState({navbarFixed: false});
    }

    // Toggle which navbar item is colored pink
    if (this.state.yPos < this.aboutY && this.state.currentNavItem !== 0) {
      this.setState({currentNavItem: 0});
    } else if (this.aboutY <= this.state.yPos && this.state.yPos < this.portfolioY && this.state.currentNavItem !== 1) {
      this.setState({currentNavItem: 1});
    } else if (this.portfolioY <= this.state.yPos && this.state.yPos < this.contactY && this.state.currentNavItem !== 2) {
      this.setState({currentNavItem: 2});
    } else if (this.contactY <= this.state.yPos && this.state.currentNavItem !== 3) {
      this.setState({currentNavItem: 3})
    }

    // Handle animations for elements scrolled on-screen
    Array.from(document.getElementsByClassName('hidden')).forEach((elem, i) => {
      let elemRect = elem.getBoundingClientRect();
      let elemY = elemRect.top + window.scrollY;
      if (elem.classList.contains('c1') || elem.classList.contains('c2') || elem.classList.contains('c3') || elem.classList.contains('c4')) {
        elemY = elemY - (this.viewportHeight * 0.4);
      } else if (elem.classList.contains('transform-down')) {
        elemY = elemY - (this.viewportHeight * 0.1);
      }
      if (this.state.yPos + this.viewportHeight > elemY + (this.viewportHeight * 0.1)) {
        elem.classList.remove('hidden');
        setTimeout(function() {
          elem.classList.remove('c1');
          elem.classList.remove('c2');
          elem.classList.remove('c3');
          elem.classList.remove('c4');
        }, 50);
      }
    });

  }

  updateYPosition() {
    this.setState({yPos: window.scrollY});
  }

  render() {
    return (
      <Layout>
        <Navbar fixed={this.state.navbarFixed} current={this.state.currentNavItem} />
        <Landing />
        <SectionBreak color='rgb(255, 255, 217)' bgColor='rgb(240, 240, 240)' fadein={true} />
        <About />
        <SectionBreak color='rgb(240, 240, 240)' bgColor='rgb(248, 248, 248)' />
        <Portfolio />
        <SectionBreak color='rgb(248, 248, 248)' bgColor='rgb(43, 43, 43)' />
        <Contact />
      </Layout>
    );
  }
}

export default App;