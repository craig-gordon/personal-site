import React from 'react';
import Highcharts from '../utils/highcharts-custom/dist/custom.src.js';
import HighchartsReact from 'highcharts-react-official';
import './skillsChart.scss';

import skillsSeries from '../data/skills';

const options: Highcharts.Options = {
  chart: {
    height: '65%',
    type: 'packedbubble'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: true,
    hideDelay: 200,
    headerFormat: null,
    pointFormat: '<b>{point.name}</b>'
  },
  legend: {
    enabled: false,
    itemStyle: {
      fontSize: '16px'
    },
    verticalAlign: 'top'
  },
  plotOptions: {
    packedbubble: {
      dataLabels: {
        enabled: false
      },
      maxSize: '100%',
      minSize: '50%'
    },
    series: {
      stickyTracking: false,
      states: {
        hover: {
          halo: false
        }
      }
    }
  },
  responsive: {
    rules: [
      {
        chartOptions: {
          legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle'
          }
        },
        condition: {
          maxWidth: 500
        }
      }
    ]
  },
  series: skillsSeries
};

const SkillsChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default SkillsChart;
