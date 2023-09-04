import React from 'react'
import { Line } from 'react-chartjs-2';
function ChartDataReliability(props) {

    const dataGen = () => {
        var randomNumbers = [];
        for (let i = 0; i < 7; i++) {
            // Generate a random number between 1 and 100 (you can adjust the range as needed)
            var randomNumber = Math.floor(Math.random() * 10) + 1;
            randomNumbers.push(randomNumber);
        }
        return randomNumbers;
    }

    function getPastSevenDates() {
        const today = new Date();
        const pastSevenDates = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            pastSevenDates.push(date.toISOString().split('T')[0]);
        }

        return pastSevenDates;
    }

    const data = {
        labels: getPastSevenDates(),
        datasets: [
            {
                label: 'Pass',
                data: dataGen(),
                backgroundColor: '#5470c6',
                borderColor: '#5470c6',
                borderWidth: 1,
                fill: false,
                lineTension: 0.3,
            },
            {
                label: 'Fail',
                backgroundColor: '#ee6666',
                data: dataGen(),
                borderColor: '#ee6666',
                borderWidth: 1,
                fill: false,
                lineTension: 0.3,
            },
            {
                label: 'Warning',
                backgroundColor: '#fac858',
                data: dataGen(),
                borderColor: '#fac858',
                borderWidth: 1,
                fill: false,
                lineTension: 0.3,
            },
            // Add more datasets as needed
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: props.title,
            },
            tooltip: {
                mode: 'index',
            },

        },
        scales: {
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'X-Axis Label',
                },
                grid: {
                    display: false
                },
            },
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Value',
                },
                grid: {
                    display: false
                },

            },

        },
        // scales: {
        //     yAxes: [{
        //       ticks: {
        //         reverse: true,
        //       }
        //     }]
        //   }
    };


    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Data',
                data: [65, 59, 80, 81, 56, 55, 40], // Adjust these values for your data
                borderColor: 'blue', // Line color
                fill: false,
            },
        ],
    };

    const horizontalLineValue = 70; // Adjust this value to set the position of the horizontal line

    const options2 = {
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y',
                        value: horizontalLineValue,
                        borderColor: 'red', // Color of the horizontal line
                        borderWidth: 2, // Width of the line
                        label: {
                            content: 'Target', // Label for the horizontal line
                            enabled: true,
                            position: 'right',
                        },
                    },
                ],
            },
        },
    };
    return (
        <Line data={data} options={options} width={100} height={80} />
        // <Line data={chartData} options={options2} />
    )
}

export default ChartDataReliability