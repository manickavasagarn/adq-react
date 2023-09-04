import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Test() {
    const chartRef = useRef(null);
    const [startValue, setStartValue] = useState(0); // Initial start value
    const [endValue, setEndValue] = useState(10); // Initial end value
    const [ischange, setIsChange] = useState(false);
    const minValue = 20;

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        // Define your chart options
        const options = {
            // Your ECharts chart configuration goes here
            title: {
                text: 'ECharts Data Zoom Slider',
            },
            xAxis: {
                data: ['A', 'B', 'C', 'D', 'E', 'F'],
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    data: [10, 20, 15, 25, 30, 18],
                },
            ],
            dataZoom: [
                {
                    type: 'slider',
                    start: startValue, // Use the dynamic start value
                    end: endValue, // Use the dynamic end value
                    handleSize: '100%',
                    handleStyle: {
                        color: '#5470c6',
                    },
                    backgroundColor: '#e2e2e2',
                    borderColor: 'transparent',
                    showDetail: false,
                },
            ],
        };

        chart.setOption(options);

        // Add a custom click event handler for the data zoom slider
        chart.on('datazoom', (params) => {
            // Get the new start and end values from params
            const newStartValue = params.start;
            const newEndValue = params.end;

            if ((newEndValue - newStartValue) <= minValue) {
                var adjEndValue = newStartValue + 21;
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

        return () => {
            // Clean up when the component is unmounted
            chart.dispose();
        };
    }, [ischange]);
    return (
        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    )
}

export default Test