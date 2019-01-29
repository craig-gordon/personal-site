import React from 'react';
import './landing.scss';

import PNGlib from 'pnglib';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.parallaxDivs = Array.from(Array(50).keys()).map((item, i) => <div key={i} className='parallax-row' id={`row${i}`} />);
  }

  componentDidMount() {
    const colors = [
      [8, 29, 88],
      [34, 94, 168],
      [65, 182, 196],
      [199, 233, 180],
      [255, 255, 217]
    ];
    
    function colorFromPercent(gradientProgressPercent) {
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
    }
    
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
      <div className='landing-container'>
        {/* <div className={styles.landing}>Craig Gordon</div> */}
        <div className='parallax-wrapper'>
          {this.parallaxDivs}
        </div>
      </div>
    );
  }
};

export default Landing;