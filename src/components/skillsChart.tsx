import React from 'react';
import styles from './skillsChart.module.scss';

import DarkUnica from 'highcharts/themes/dark-unica';

import Highcharts from 'highcharts';

import HighchartsMore from 'highcharts/highcharts-more';

import HighchartsReact from 'highcharts-react-official';

HighchartsMore(Highcharts);
DarkUnica(Highcharts);

const options = {
  chart: {
    height: '60%',
    type: 'packedbubble'
  },
  plotOptions: {
    packedbubble: {
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.point.icon ? `<img height='${this.point.value / 10}px' class=${styles.icon} src=${this.point.icon} />` : null;
        },
        style: {
          color: 'black',
          fontWeight: 'normal',
          textOutline: 'none'
        },
        useHTML: true
      },
      maxSize: '100%',
      minSize: '50%'
    }
  },
  responsive: {
    rules: [{
      chartOptions: {
        legend: {
          align: 'right',
          layout: 'vertical',
          verticalAlign: 'middle'
        }
      },
      condition: {
        maxWidth: 500
      },
    }]
  },
  series: [
    {
      color: 'rgb(255, 127, 127)',
      data: [
        {
          className: styles.bubble,
          icon: 'javascript.svg',
          name: 'JavaScript',
          value: 1000
        },
        {
          className: styles.bubble,
          icon: 'typescript.svg',
          name: 'TypeScript',
          value: 500
        },
        {
          className: styles.bubble,
          icon: 'html5.svg',
          name: 'HTML5',
          value: 750
        },
        {
          className: styles.bubble,
          icon: 'css3.svg',
          name: 'CSS3',
          value: 750
        },
        {
          className: styles.bubble,
          icon: 'sql.svg',
          name: 'SQL',
          value: 700
        }
      ],
      name: 'Languages',
      type: 'packedbubble'
    },
    {
      color: 'rgb(255, 255, 0)',
      data: [
        {
          className: styles.bubble,
          icon: 'react.svg',
          name: 'React',
          value: 1000
        },
        {
          className: styles.bubble,
          icon: 'jquery.svg',
          name: 'jQuery',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'redux.svg',
          name: 'Redux',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'highcharts.svg',
          name: 'Highcharts',
          value: 800
        },
        {
          className: styles.bubble,
          icon: 'sass.svg',
          name: 'Sass',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'styled.svg',
          name: 'Styled-Components',
          value: 800
        },
        {
          className: styles.bubble,
          icon: 'cssmodules.svg',
          name: 'CSS Modules',
          value: 600
        },
        {
          className: styles.bubble,
          icon: 'bootstrap.svg',
          name: 'Bootstrap',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'antd.svg',
          name: 'Ant Design',
          value: 700
        }
      ],
      name: 'Frontend',
      type: 'packedbubble'
    },
    {
      color: 'rgb(66, 134, 244)',
      data: [
        {
          className: styles.bubble,
          icon: 'node.svg',
          name: 'Node',
          value: 900
        },
        {
          className: styles.bubble,
          icon: 'express.svg',
          name: 'Express',
          value: 900
        },
        {
          className: styles.bubble,
          icon: 'mysql.svg',
          name: 'MySQL',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'postgresql.svg',
          name: 'PostgreSQL',
          value: 800
        },
        {
          className: styles.bubble,
          icon: 'sequelize.svg',
          name: 'Sequelize',
          value: 800
        },
        {
          className: styles.bubble,
          icon: 'mongodb.svg',
          name: 'MongoDB',
          value: 600
        }
      ],
      name: 'Backend',
      type: 'packedbubble'
    },
    {
      color: 'rgb(69, 255, 40)',
      data: [
        {
          className: styles.bubble,
          icon: 'mocha.svg',
          name: 'Mocha',
          value: 500
        },
        {
          className: styles.bubble,
          icon: 'jest.svg',
          name: 'Jest',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'enzyme.svg',
          name: 'Enzyme',
          value: 600
        }
      ],
      name: 'Testing',
      type: 'packedbubble'
    },
    {
      color: 'rgb(255, 255, 255)',
      data: [
        {
          className: styles.bubble,
          icon: 'git.svg',
          name: 'Git',
          value: 900
        },
        {
          className: styles.bubble,
          icon: 'webpack.svg',
          name: 'Webpack',
          value: 900
        },
        {
          className: styles.bubble,
          icon: 'rest.svg',
          name: 'RESTful APIs',
          value: 900
        },
        {
          className: styles.bubble,
          icon: 'chrome.svg',
          name: 'Chrome APIs',
          value: 600
        },
        {
          className: styles.bubble,
          icon: 'gatsby.svg',
          name: 'GatsbyJS',
          value: 600
        },
        {
          className: styles.bubble,
          icon: 'regex.svg',
          name: 'RegEx',
          value: 700
        },
        {
          className: styles.bubble,
          icon: 'now.svg',
          name: 'Now.sh',
          value: 600
        },
        {
          className: styles.bubble,
          icon: 'heroku.svg',
          name: 'Heroku',
          value: 600
        }
      ],
      name: 'Miscellaneous',
      type: 'packedbubble'
    }
  ],
  title: {
    text: 'My Skillset'
  },
  tooltip: {
    pointFormat: '<b>{point.name}</b>',
    useHTML: true
  }
};

export default () => (
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
);