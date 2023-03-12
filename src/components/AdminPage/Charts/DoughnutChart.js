import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ rocketColor, title, percentage}) {
    const doughnutData = [percentage, 100 - percentage];

    const data = {
        datasets: [
            {
                backgroundColor: [rocketColor, '#4B4B4B'],
                hoverBackgroundColor: '#ffffff',
                hoverBorderColor: 'rgba(255,99,132,1)',
                borderWidth: 0,
                data: doughnutData
            }
        ]
    };

    const options = {
        cutout: 38,
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            datalabels: {
                formatter: (value) => {
                    return value + '%';
                },
                display: false,
                align: 'center',
                backgroundColor: '#00000',
                borderRadius: 5,
                font: {
                  size: 10,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                  }
            },
            x: {
                grid: {
                  display: false,
                },
                ticks: {
                    display: false,
                },
              }
        },
        layout: {
            padding: 0
        }
    };

    return (
        <div className='doughnutChart flex flex-col lg:gap-2 justify-center h-[100%] w-[100%]'>
            <div className='h-24 w-24 flex flex-col items-center justify-center'>
                <Doughnut data={data} options={options} />
                {/* TEMP PADDING - CHART JS ERROR? NOT ALIGNING IN THE MIDDLE */}
                <h4 className='pl-2'>{title}</h4>
                <h5 className='pl-2 mb-8 absolute' style={{color: rocketColor}}>{percentage}%</h5>
            </div>

        </div>
    )
}
