import React from 'react';
import Button from '../Button';
import DashboardBlocks from './DashboardBlocks/DashboardBlocks';

// For now static until backend is up -> loop and display data based on info type (fx. BarChart, SingleCol, Double etc.)
// Still a lot of titles missing

export default function DashboardEconomyData({ data }) {
  return (
    <section className='flex flex-col gap-8 mt-24'>
        <div className='flex justify-between items-center'>
            <h5 className='text-2xl text-primaryGray-200'>{data?.economyHeadline}</h5>
            <Button buttonColor={"purple"} btnText={"Generate report"} link={""} />
        </div>
        <div className='grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3'>
            {/* SINGLE - DAILY ORDERS */}
            <DashboardBlocks
                type={"text"}
                width={"singleCol"} 
                data={data?.economy_statistics?.dailyOrders}
                title={"Daily orders"}
            />

            {/*  TRIPPLE - WEEKLY ORDERS, WKLY REVENUE AND DAILY REVENUE*/}
            <DashboardBlocks
                type={"text"}
                width={"trippleCol"}

                title={"Weekly orders"}
                data={data?.economy_statistics?.weeklyOrders}
                
                title2={"Weekly revenue (SC)"}
                data2={data?.economy_statistics?.weeklyRevenue?.value.toFixed(2)}
                suffix2={true}
                suffixValue2={data?.economy_statistics?.weeklyRevenue?.suffix}

                title3={"Daily revenue (SC)"} 
                data3={data?.economy_statistics?.dailyRevenue?.value}
                suffix3={true}
                suffixValue3={data?.economy_statistics?.dailyRevenue?.suffix}
            />
            
            {/* SINGLE, TOTAL REVENUE */}
            <DashboardBlocks
                type={"text"}
                width={"singleCol"} 
                data={data?.economy_statistics?.totalRevenue?.value.toFixed(1)}
                title={"Total revenue (SC)"}
                suffix={true}
                suffixValue={data?.economy_statistics?.totalRevenue?.suffix}
                textSize={"text-xl"}
            />

            {/* BARRCHART DAILY REVENUE */}
            <DashboardBlocks
                type={"barChart"}
                width={"singleCol"} 
                chartLabels={data?.economy_statistics?.dailyRevenueChart?.labels}
                chartData={data?.economy_statistics?.dailyRevenueChart?.data}
                title={"Daily revenue"}
                suffix={true}
                suffixValue={data?.economy_statistics?.dailyRevenueChart?.suffix}
                lowTreshold={data?.economy_statistics?.dailyRevenueChart?.lowThreshold}
                highTreshold={data?.economy_statistics?.dailyRevenueChart?.highThreshold} 
            />

            
            {/* LINECHART MONTHLY ORDERS + REVENUE */}
            <DashboardBlocks
                type={"doubleLineChart"}
                width={"singleCol"} 
                chartLabels={data?.economy_statistics?.monthlyLineChart_OrdersRevenue?.labels}
                chartData={data?.economy_statistics?.monthlyLineChart_OrdersRevenue?.data[0]?.data}
                chartData2={data?.economy_statistics?.monthlyLineChart_OrdersRevenue?.data[1]?.data}
                legend={data?.economy_statistics?.monthlyLineChart_OrdersRevenue?.data[0]?.label}
                legend2={data?.economy_statistics?.monthlyLineChart_OrdersRevenue?.data[1]?.label}
                title={"Monthly orders and revenue (SC)"}
                title2={"SC"}
            />

            {/* LINECHART */}
            <DashboardBlocks
                type={"doubleLineChart"}
                width={"singleCol"} 
                chartLabels={data?.economy_statistics?.monthlyLineChart_VolumesWeight?.labels}
                chartData={data?.economy_statistics?.monthlyLineChart_VolumesWeight?.data[0]?.data}
                chartData2={data?.economy_statistics?.monthlyLineChart_VolumesWeight?.data[1]?.data}
                legend={data?.economy_statistics?.monthlyLineChart_VolumesWeight?.data[0]?.label}
                legend2={data?.economy_statistics?.monthlyLineChart_VolumesWeight?.data[1]?.label}
                title={"Monthly orders and revenue (SC)"}
                title2={"SC"}
            />
        </div>
    </section>
  )
}
