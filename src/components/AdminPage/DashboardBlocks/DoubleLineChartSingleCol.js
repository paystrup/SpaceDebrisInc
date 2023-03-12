import React from 'react';
import DoubleLineChart from '../Charts/DoubleLineChart';

export default function DoubleLineChartSingleCol({ chartLabels, chartData, chartData2, title, suffix, suffixValue, legend, legend2, title2 }) {

    return (
        <div className='flex gap-5 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
            <DoubleLineChart
                chartLabels={chartLabels}
                chartData={chartData}
                chartData2={chartData2}
                title={title}
                title2={title2}
                suffix={suffixValue}
                legend={legend}
                legend2={legend2}
            />
        </div>
    )
}
