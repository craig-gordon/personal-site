import React from 'react';
import Highcharts from '../utils/highcharts-custom/dist/custom.src.js';
import HighchartsReact from 'highcharts-react-official';
import './skillsChart.scss';

import skillsSeries from '../data/skills';

const options = {
  chart: {
    height: '65%',
    type: 'packedbubble'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: true,
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
      states: {
        hover: {
          halo: false
        }
      },
      events: {
        legendItemClick: function(event) {
          if (!this.visible) {
            return true;
          }

          let seriesIndex = this.index;
          let series = this.chart.series;
          
          for (let i = 0; i < series.length; i++) {
            if (series[i].index != seriesIndex) {
              series[i].visible ? series[i].hide() : series[i].show();
            }
          }
          
          return false;
        }
      }
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
  series: skillsSeries
};

const SkillsChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
    callback={(chart) => {
      for (let i = 0; i < chart.series.length; i++) {
        for (let j = 0; j < chart.series[i].data.length; j++) {
          console.log('point:', chart.series[i].data[j]);
        }
      }
    }}
  />
);

export default SkillsChart;