'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({
                     titleChart,
                     labelDataset,
                     labelsChart,
                     dataChart
                   }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: titleChart,
      }
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(...dataChart) + 500,
        ticks:{
          stepSize: 500,
        }
      }
    }
  }

  const labels = labelsChart;

  const data = {
    labels,
    datasets: [{
      label: labelDataset,
      data: dataChart,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
    ]
  }
  return <Line options={options} data={data} className={'!h-52'}/>
}
export default LineChart;