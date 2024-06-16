import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LiveChat = ({historicalData}) => {
    const [data,setData]=useState([['Data','Prices']]);
    useEffect(
        ()=>{
            let dataCopy = [['Data','Prices']];
            if(historicalData.prices){
                historicalData.prices.map(
                    (ele)=>{
                        dataCopy.push([`${new Date(ele[0]).toLocaleDateString().slice(0,-5)}`,ele[1]])
                    }
                )
                setData(dataCopy);
            }
        },[historicalData]
    )
  return (
    <Chart
        chartType = 'LineChart'
        data={data}
        height='100%'

    />
  )
}

export default LiveChat
