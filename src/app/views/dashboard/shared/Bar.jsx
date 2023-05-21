import React from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const BarChart = ({ height, color = [], data=[], title="" }) => {
  const theme = useTheme();

  const option = {
    title: {
      text: title
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactEcharts
    option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
  />;
};

export default BarChart;
