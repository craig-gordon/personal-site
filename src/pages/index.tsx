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
      navbarFixed: false
    };
    this.checkNavbarState = this.checkNavbarState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkNavbarState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkNavbarState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('current state:', this.state, 'prev state:', prevState);
    if (prevState.yPos - this.state.yPos >= 10) {
      this.setState({navbarFixed: true});
    } else if (this.state.yPos > prevState.yPos) {
      this.setState({navbarFixed: false});
    }
  }

  checkNavbarState() {
    this.setState({yPos: window.scrollY});
  }

  render() {
    return (
      <Layout>
        <Navbar fixed={this.state.navbarFixed} />
        <Landing />
        <SectionBreak color='rgb(255, 255, 217)' bgColor='whitesmoke' />
        <About />
        <SectionBreak color='whitesmoke' bgColor='white' />
        <Portfolio />
        <SectionBreak color='white' bgColor='black' />
        <Contact />
      </Layout>
    );
  }
}

export default App;