import React from 'react';
import BarChartSingleCol from './BarChartSingleCol';
import DoubleLineChartSingleCol from './DoubleLineChartSingleCol';
import TextDoubleCol from './TextDoubleCol';
import TextQuadCol from './TextQuadCol';
import TextSingleCol from './TextSingleCol';
import TextTrippleCol from './TextTrippleCol';

// PROPS OVERVIEW
// type
// text, barChart, doughnutChart, lineChart

// width
// singleCol, doubleCol, trippleCol, quadCol
// TrippleColAlign: top, bottom

// title: string
// suffix: boolean, suffixValue: string
// data

// TODO: Add text sizes as prop - 3 fixed sizes? Or hardcoded px/rem size
// add treshholds (colors of text depending on the value), bottomValue (bottomline, bad = red), topValue (goal, green) -> everything between is orange

export default function DashboardBlocks({ type, width, chartLabels, chartData, chartData2, data, data2, data3, data4, title, title2, title3, title4, suffix, suffix2, suffix3, suffix4, suffixValue, suffixValue2, suffixValue3, suffixValue4, lowTreshold, highTreshold, totalDecimals, legend, legend2, textSize }) {
    
    if (type === "text")
    return (
        <>
            {width === "singleCol" && <TextSingleCol data={data} type={type} title={title} suffix={suffix} suffixValue={suffixValue} textSize={textSize} />}
            {width === "doubleCol" && <TextDoubleCol data={data} data2={data2} type={type} title={title} title2={title2} suffix={suffix} suffix2={suffix2} suffixValue={suffixValue} suffixValue2={suffixValue2} />}
            {width === "trippleCol" && <TextTrippleCol data={data} data2={data2} data3={data3} type={type} title={title} title2={title2} title3={title3} suffix={suffix} suffix2={suffix2} suffix3={suffix3} suffixValue={suffixValue} suffixValue2={suffixValue2} suffixValue3={suffixValue3} />}
            {width === "quadCol" && <TextQuadCol data={data} data2={data2} data3={data3} data4={data4} type={type} title={title} title2={title2} title3={title3} title4={title4} suffix={suffix} suffix2={suffix2} suffix3={suffix3} suffix4={suffix4} suffixValue={suffixValue} suffixValue2={suffixValue2} suffixValue3={suffixValue3} suffixValue4={suffixValue4} />}
        </>
    );

    if (type === "barChart")
    return (
        <>
            {width === "singleCol" && <BarChartSingleCol chartLabels={chartLabels} chartData={chartData} title={title} suffix={suffix} suffixValue={suffixValue} lowTreshold={lowTreshold} highTreshold={highTreshold} totalDecimals={totalDecimals} />}

        </>
    );

    if (type === "doubleLineChart")
    return (
        <>
            {width === "singleCol" && <DoubleLineChartSingleCol chartLabels={chartLabels} chartData={chartData} chartData2={chartData2} title={title} suffix={suffix} suffixValue={suffixValue} legend={legend} legend2={legend2} />}
        </>
    );
}
