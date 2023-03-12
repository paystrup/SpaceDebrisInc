import React from 'react';
import BarChart from '../Charts/BarChart';

export default function BarChartSingleCol({ chartLabels, chartData, title, suffix, suffixValue, lowTreshold, highTreshold, totalDecimals }) {
    return (
        <div className='flex gap-5 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
            <BarChart
                chartLabels={chartLabels}
                chartData={chartData}
                title={title}
                suffix={suffixValue}
                lowTreshold={lowTreshold}
                highTreshold={highTreshold}
                totalDecimals={totalDecimals}
            />
        </div>
    )
}
