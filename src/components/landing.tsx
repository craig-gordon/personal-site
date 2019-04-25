import React from 'react';
import './landing.scss';

import { FaPaperPlane } from 'react-icons/fa';

import PNGlib from 'pnglib';

class Landing extends React.Component {
  private parallaxDivs = Array.from(Array(50).keys()).map((item, i) => (
    <div key={i} className='parallax-row' id={`row${i}`} />
  ));

  public componentDidMount() {
    const colors = [
      [8, 29, 68],
      [34, 94, 168],
      [65, 182, 196],
      [199, 233, 180],
      [255, 255, 217]
    ];

    const colorFromPercent = (gradientProgressPercent: number) => {
      const bucketSize = 100 / colors.length;
      const randomFromBucketRange =
        Math.random() * (bucketSize * 2) - bucketSize;

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

    const pixelSize = 4;
    const pngWidth = 500;
    const numberOfRows = 50;

    const png = new PNGlib(pngWidth, 1, 256);

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      for (let xIndex = 0; xIndex < pngWidth; ) {
        const color = colorFromPercent((rowIndex / numberOfRows) * 100);
        const colorBlockLength = pixelSize * Math.ceil(Math.random() * 5);

        for (
          let colorBlockIndex = 0;
          colorBlockIndex < colorBlockLength;
          colorBlockIndex++
        ) {
          png.buffer[png.index(xIndex + colorBlockIndex, 0)] = png.color(
            (color as number[])[0],
            (color as number[])[1],
            (color as number[])[2]
          );
        }

        xIndex += colorBlockLength;
      }

      (document.getElementById(
        'row' + rowIndex
      ) as HTMLElement).style.backgroundImage =
        'url(data:image/gif;base64,' + png.getBase64() + ')';
      document
        .getElementsByClassName('below-parallax')[0]
        .setAttribute('style', 'background-color:rgb(255, 255, 217)');
    }
  }

  public render() {
    return (
      <div className='landing-container'>
        <div className='header-container'>
          <h1
            style={{ width: '100%', textAlign: 'center' }}
            className='header-name'
          >
            {`Hello, I'm  `}
            <span className='name-text'>Craig Gordon</span>.
          </h1>
          <h1 className='header-role'>
            <span className='header-role-left'>I'm a full-stack</span>{' '}
            <span className='header-role-right'>web developer.</span>
          </h1>
          <div className='header-button'>
            <a href='#about'>
              <div className='header-button-inner'>
                <span style={{ marginRight: '12px' }}>View my work</span>
                <FaPaperPlane />
              </div>
            </a>
          </div>
        </div>
        <div className='parallax-wrapper'>{this.parallaxDivs}</div>
        <div className='below-parallax' />
      </div>
    );
  }
}

export default Landing;
