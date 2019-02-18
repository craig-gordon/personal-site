import React from 'react';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import SectionBreak from '../components/SectionBreak';
import Contact from '../components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yPos: window.scrollY,
      navbarFixed: false,
      currentNavItem: 0
    };
    this.viewportHeight = window.innerHeight;
    this.aboutY = null;
    this.portfolioY = null;
    this.contactY = null;
    this.checkNavbarState = this.checkNavbarState.bind(this);
  }

  componentDidMount() {
    console.log('body:', document.body.getBoundingClientRect());
    window.addEventListener('scroll', this.checkNavbarState);
    let aboutRect = document.getElementById('about').getBoundingClientRect();
    let portfolioRect = document.getElementById('portfolio').getBoundingClientRect();
    let contactRect = document.getElementById('contact').getBoundingClientRect();
    this.aboutY = Math.floor(aboutRect.y - (aboutRect.height / 2) - 250);
    this.portfolioY = Math.floor(portfolioRect.y - (portfolioRect.height / 2) - 100);
    this.contactY = Math.floor(contactRect.y - (portfolioRect.height / 2));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkNavbarState);
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
    let elems = document.getElementsByClassName('hidden');
    Array.from(elems).forEach((elem) => {
      let elemY = elem.getBoundingClientRect().top;
      if (this.state.yPos + this.viewportHeight > elemY + (this.viewportHeight * 0.75)) {
        elem.classList.remove('hidden');
        setTimeout(function() {
          elem.classList.remove('c1');
          elem.classList.remove('c2');
          elem.classList.remove('c3');
          elem.classList.remove('c4');
        }, 250);
      }
    });
  }

  checkNavbarState() {
    this.setState({yPos: window.scrollY});
  }

  render() {
    return (
      <Layout>
        <Navbar fixed={this.state.navbarFixed} current={this.state.currentNavItem} />
        <Landing />
        <SectionBreak color='rgb(255, 255, 217)' bgColor='rgb(240, 240, 240)' />
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