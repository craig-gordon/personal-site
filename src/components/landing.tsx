import React from 'react';
import './landing.scss';

import Navbar from './Navbar';

import { FaPaperPlane } from 'react-icons/fa';

import PNGlib from 'pnglib';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.parallaxDivs = Array.from(Array(50).keys()).map((item, i) => <div key={i} className='parallax-row' id={`row${i}`} />);
  }

  componentDidMount() {
    const colors = [
      [8, 29, 68],
      [34, 94, 168],
      [65, 182, 196],
      [199, 233, 180],
      [255, 255, 217]
    ];
    
    const colorFromPercent = (gradientProgressPercent) => {
      const bucketSize = 100 / colors.length;
      const randomFromBucketRange = (Math.random() * (bucketSize * 2)) - bucketSize;
      
      const colorPercent = gradientProgressPercent + randomFromBucketRange;
    
      if (colorPercent <= 20) {
        return colors[0];
      } else if (colorPercent > 20 && colorPercent <= 40) {
        return colors[1];
      } else if (colorPercent > 40 && colorPercent <= 60) {
        return colors[2];
      } else if (colorPercent > 60 && colorPercent <= 80) {
        return colors[3];
      } else if (colorPercent > 80) {
        return colors[4];
      }
    };
    
    const pixelSize = 5;
    const pngWidth = 500;
    const numberOfRows = 50;
    
    const png = new PNGlib(pngWidth, 1, 256);
    
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      for (let xIndex = 0; xIndex < pngWidth;) {
         const color = colorFromPercent(rowIndex / numberOfRows * 100);
         const colorBlockLength = pixelSize * Math.ceil(Math.random() * 5);
    
         for (let colorBlockIndex = 0; colorBlockIndex < colorBlockLength; colorBlockIndex++) {
            png.buffer[png.index(xIndex + colorBlockIndex, 0)] = png.color(color[0], color[1], color[2]);
         }
    
         xIndex += colorBlockLength;
      }
    
      document.getElementById('row' + rowIndex).style.backgroundImage = 'url(data:image/gif;base64,' + png.getBase64() + ')';
    }
  }
  
  render() {
    return (
      <section className='landing-container'>
        <Navbar />
        <div className='header-container'>
          <h1 className='header-name'>Hello, I'm <span className='name-text'>Craig Gordon</span>.</h1>
          <h1 className='header-role'>I'm a full-stack web developer.</h1>
          <div className='header-button'>
            <div className='header-button-inner'>
              <span style={{marginRight: '12px'}}>View my work</span>
              <FaPaperPlane />
            </div>
          </div>
        </div>
        <div className='parallax-wrapper'>
          {this.parallaxDivs}
        </div>
      </section>
    );
  }
};

export default Landing;