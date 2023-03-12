import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function DoubleLineChart({ chartData, chartLabels, chartData2, title, title2, suffix, legend, legend2 }) {
  const data = {
      labels: chartLabels,
      datasets: [
          {
              label: legend,
              backgroundColor: '#A143FF',
              borderColor: '#A143FF',
              hoverBackgroundColor: '#ffffff',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: chartData
          },
          {
            label: legend2,
            backgroundColor: '#FF4392',
            borderColor: '#FF4392',
            hoverBackgroundColor: '#ffffff',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: chartData2
        }
      ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
      plugins: {
          legend: {
              display: true,
              align: 'start',
          },
          datalabels: {
            //   clamp: true,
              display: true,
              clamp: true,
              clip: false,
              align: 'end',
              anchor: 'end',
              font: {
                size: 14,
              }
          },
      },
      scales: {
          y: {
              ticks: {
                  display: false,
              },
              grid: {
                  display: false
                }
          },
          x: {
              grid: {
                display: false
              }
            }
      },
      layout: {
          padding: 0
      }
  };
  
  return (
    <div className="barChart flex flex-col gap-10">
        <div className='flex justify-between items-center text-xl text-primaryGray-200'>
            <h6 className="font-spaceMedium">
                {title}
            </h6>
            <h6>
                {title2}
            </h6>
        </div>

        <div>
            <Line data={data} options={options}/>
        </div>
    </div>
  )
}
