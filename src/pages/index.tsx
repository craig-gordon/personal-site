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
    this.aboutY = null;
    this.portfolioY = null;
    this.contactY = null;
    this.checkNavbarState = this.checkNavbarState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkNavbarState);
    let aboutRect = document.getElementById('about').getBoundingClientRect();
    let portfolioRect = document.getElementById('portfolio').getBoundingClientRect();
    let contactRect = document.getElementById('contact').getBoundingClientRect();
    this.aboutY = Math.floor(aboutRect.y - (aboutRect.height / 2));
    this.portfolioY = Math.floor(portfolioRect.y - (portfolioRect.height / 2));
    this.contactY = Math.floor(contactRect.y - (portfolioRect.height / 2));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkNavbarState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Current Y:', this.state.yPos);
    console.log('About Y:', this.aboutY);
    if (prevState.yPos - this.state.yPos >= 10) {
      this.setState({navbarFixed: true});
    } else if (this.state.yPos > prevState.yPos) {
      this.setState({navbarFixed: false});
    }

    if (this.state.yPos < this.aboutY && this.state.currentNavItem !== 0) {
      this.setState({currentNavItem: 0});
    } else if (this.aboutY <= this.state.yPos && this.state.yPos < this.portfolioY && this.state.currentNavItem !== 1) {
      this.setState({currentNavItem: 1});
    } else if (this.portfolioY <= this.state.yPos && this.state.yPos < this.contactY && this.state.currentNavItem !== 2) {
      this.setState({currentNavItem: 2});
    } else if (this.contactY <= this.state.yPos && this.state.currentNavItem !== 3) {
      this.setState({currentNavItem: 3})
    }
  }

  checkNavbarState() {
    this.setState({yPos: window.scrollY});
  }

  render() {
    return (
      <Layout>
        <Navbar fixed={this.state.navbarFixed} current={this.state.currentNavItem} />
        <Landing />
        <SectionBreak color='rgb(255, 255, 217)' bgColor='whitesmoke' />
        <About />
        <SectionBreak color='whitesmoke' bgColor='white' />
        <Portfolio />
        <SectionBreak color='white' bgColor='rgb(43, 43, 43)' />
        <Contact />
      </Layout>
    );
  }
}

export default App;