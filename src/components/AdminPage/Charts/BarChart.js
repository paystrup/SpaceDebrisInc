// ./components/LineChart.js
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// charData: array containg numbers of data
// chartLabels: array of labels that aligns with the data array
// suffix: value displayed after data, fx. kg, t, m3 etc.
// title: the title of the cart
// lowTreshhold: all values under the bottomline will be colored red
// highTreshhold: the goal, values over the amount will be colored green
// between Low and High treshhold -> orange
// totalDecimals, how many decimals after the total value? Backend sends 8 decimals, would be too much to show

export default function BarChart({ chartData, chartLabels, title, suffix, lowTreshold, highTreshold, totalDecimals }) {
    const weeklyData = chartData;
    const labels = chartLabels;

    // Sum of the whole week
    const [total, setTotal] = useState(0);

    // Array of BG colors for the chart
    const [bgArray, setBgArray] = useState("#98FF59");

    useEffect(() => {
        // Get sum of data
        setTotal(weeklyData.reduce((acc, current) => acc + current, 0));
    
        // Backgroundcolors are rendered chronological in Chart.js
        // We push the colors into this empty array
        const backgroundColor = [];

        // Colors ... from tailwind.config.js
        const errorColor = '#FF2B2B';
        const successColor = '#98FF59';
        const orangeColor = '#FFA943';
        
        weeklyData.forEach((number) => {
            if (number >= lowTreshold && number < highTreshold ) {
                backgroundColor.push(orangeColor);
            }
            if (number < lowTreshold ) {
                backgroundColor.push(errorColor);
            }
            if (number >= highTreshold ) {
                backgroundColor.push(successColor);
            }
        });

        setBgArray(backgroundColor);
        console.log(bgArray);
    }, [weeklyData, labels, highTreshold, lowTreshold]);

    const data = {
        responsive: true,
        maintainAspectRatio: true,
        labels: labels,
        datasets: [
            {
                backgroundColor: bgArray,
                hoverBackgroundColor: '#ffffff',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: weeklyData,
                borderRadius: 4
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                clamp: true,
                display: true,
                align: 'end',
               
                anchor: 'end',
                font: {
                  size: 14,
                },
                formatter: (value) => {
                    if (value > 0)
                    return value + suffix;
                },
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
                    Total <span className="uppercase text-primaryGray-300">{totalDecimals ? total.toFixed(totalDecimals) : total.toFixed(0)}{suffix}</span>
                </h6>
            </div>        
            <div>
                <Bar data={data} options={options}/>
            </div>
        </div>
    );
};
