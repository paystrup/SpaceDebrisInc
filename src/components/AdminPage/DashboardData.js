import React from 'react';
import DashboardBlocks from './DashboardBlocks/DashboardBlocks';

// For now static until backend is up -> loop and display data based on info type (fx. BarChart, SingleCol, Double etc.)
// Still a lot of titles missing

export default function DashboardData({ data }) {
  return (
    <section className='flex flex-col gap-8'>
        <h3 className='text-4xl font-spaceMedium'>{data?.dashboardHeadline}</h3>
        <div className='grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3'>
            {/* DUAL: ROCKETS IN ORBIT, DAILY TRIPS */}
            <DashboardBlocks
                type={"text"}
                width={"doubleCol"} 
                data={data?.dashboard_statistics?.rocketsInOrbit}
                title={"Rockets in orbit"} 
                data2={data?.dashboard_statistics?.tripsToday}
                title2={"Daily trips"} 
            />

            {/* QUAD: STOCKPILE, ORDERS TODAY, AVAILABLE ROCKETS, TOTAL ORDERS */}
            <DashboardBlocks
                type={"text"}
                width={"quadCol"}

                title={"Stockpile"}
                data={data?.dashboard_statistics?.stockpile_weight?.value}
                suffix={true}
                suffixValue={data?.dashboard_statistics?.stockpile_weight?.suffix}
                 
                title2={"Orders today"}
                data2={data?.dashboard_statistics?.ordersToday}

                title3={"Rockets available"} 
                data3={data?.dashboard_statistics?.rocketsOnStation}

                title4={"Total orders"} 
                data4={data?.dashboard_statistics?.totalOrders}
            />
            
            {/* SINGLE, DAILY PROCESSED TRASH */}
            <DashboardBlocks
                type={"text"}
                width={"singleCol"} 
                data={data?.dashboard_statistics?.totalProcessed_weight_today?.value}
                title={"Daily processed trash"}
                suffix={true}
                suffixValue={data?.dashboard_statistics?.totalProcessed_weight_today?.suffix}  
            />

            {/* BARCHART - WEEKLY PROCESSED CARGO */}
            <DashboardBlocks
                type={"barChart"}
                width={"singleCol"} 
                chartLabels={data?.dashboard_statistics?.weeklyCargoChart?.labels}
                chartData={data?.dashboard_statistics?.weeklyCargoChart?.data}
                title={"Weekly processed cargo"}
                suffix={true}
                suffixValue={data?.dashboard_statistics?.weeklyCargoChart?.suffix}
                lowTreshold={data?.dashboard_statistics?.weeklyCargoChart?.lowThreshold}
                highTreshold={data?.dashboard_statistics?.weeklyCargoChart?.highThreshold}
                totalDecimals={2} 
            />

            {/* BARCHART - WEEKLY LAUNCHES */}
            <DashboardBlocks
                type={"barChart"}
                width={"singleCol"} 
                chartLabels={data?.dashboard_statistics?.weeklyLaunchesChart?.labels}
                chartData={data?.dashboard_statistics?.weeklyLaunchesChart?.data}
                title={"Weekly launches"}
                suffix={true}
                suffixValue={data?.dashboard_statistics?.weeklyLaunchesChart?.suffix}
                lowTreshold={data?.dashboard_statistics?.weeklyLaunchesChart?.lowThreshold}
                highTreshold={data?.dashboard_statistics?.weeklyLaunchesChart?.highThreshold}
            />

            {/* TRIPLE: TOTAL TRIPS, TOTAL KG PROCESSED, TOTAL M3 PROCESSED */}
            <DashboardBlocks
                type={"text"}
                width={"trippleCol"}

                title={"Total weight processed"}
                data={data?.dashboard_statistics?.totalProcessed_weight?.value?.toFixed(2)}
                suffix={true}
                suffixValue={data?.dashboard_statistics?.totalProcessed_weight?.suffix}
                 
                title2={"Total volume processed"}
                data2={data?.dashboard_statistics?.totalProcessed_volume?.value?.toFixed(2)}
                suffix2={true}
                suffixValue2={data?.dashboard_statistics?.totalProcessed_volume?.suffix}

                title3={"Total trips"} 
                data3={data?.dashboard_statistics?.totalTrips}
            />
        </div>
    </section>
  )
}
