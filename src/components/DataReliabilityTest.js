import React, { useEffect, useRef, useState } from 'react'
import EChartsReact from 'echarts-for-react';
import axios from 'axios';
import daata from './data';
import * as echarts from 'echarts';
function DataReliabilityTest(props) {

    const chartRef = useRef(null);
    //const [option, setOption] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const chart = echarts.init(chartRef.current);
            var option = {
                title: {
                    text: props.title,
                    left: 'center',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: "normal"
                    },
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    bottom: '25%',
                    right:'1%'
                },
                xAxis: {
                    data: data.map(function (item) {
                        return item[0];
                    }),
                },
                yAxis: {

                },
                color: ["#5470c6", "#ee6666", "#fac858"],
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 25,
                        zoomLock: true, // This property disables drag-and-drop on zooming
                        moveOnMouseMove: false,
                        disableDrag: true,
                        className: 'custom-data-zoom',
                    },
                    {
                        type: 'slider',
                        start: 0,
                        end: 25,
                        zoomLock: false, // This property disables drag-and-drop on zooming
                        moveOnMouseMove: false,
                        disableDrag: true,
                        minSpan: 21,
                        className: 'custom-data-zoom',
                    },
                ],
                series: [
                    {
                        name: 'Pass',
                        type: 'line',
                       // lineStyle: { color: '#5470c6' },
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: data.map(function (item) {
                            return item[1];
                        }),
                    },
                    {
                        name: 'Fail',
                        type: 'line',
                        // color: 'bule' ,
                        // lineStyle: { color: 'bule' },
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: data.map(function (item) {
                            return item[2];
                        }),
                    },
                    {
                        name: 'Warning',
                        type: 'line',
                        //lineStyle: { color: '#fac858' },
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: data.map(function (item) {
                            return item[3];
                        }),
                    }
                ]
            }

            chart.setOption(option);
            chart.on('datazoom', (params) => {
                // Get the new start and end values from params
                const newStartValue = params.start;
                const newEndValue = params.end;

                if ((newEndValue - newStartValue) <= 25) {
                    var adjEndValue = newStartValue + 26;
                    // setEndValue(adjEndValue);
                    // setStartValue(newStartValue)
                    setTimeout(() => {
                        chart.dispatchAction({
                            type: 'dataZoom',
                            start: newStartValue,
                            end: adjEndValue,
                        });
                    }, 50);

                    console.log(adjEndValue);

                }
                //
                // Handle the data zoom event here
                console.log('Data Zoom Slider Moved. Start:', newStartValue, 'End:', newEndValue);
            });
        }
    }, [data])
    useEffect(() => {
        const numDays = 31;
        const result = generateDataArray(numDays);
        setData(result)
    }, [])


    function generateDataArray(numDays) {
        const dataArray = [];

        for (let i = 0; i < numDays; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - i); // Subtract i days from the current date
            const randomNumbers = [
                currentDate.toISOString().split('T')[0], // Current date in YYYY-MM-DD format
                Math.floor(Math.random() * (500 - 100 + 1) + 100), // Generate a random integer between 0 and 10
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 5),
            ];
            dataArray.push(randomNumbers);
        }

        return dataArray;
    }

    return (
        <div>
            {/* <EChartsReact ref={chartRef} option={option} style={{ width: "100%" }} /> */}
            <div ref={chartRef} style={{ width: '100%', height: '250px' }} />
        </div>
    )
}

export default DataReliabilityTest