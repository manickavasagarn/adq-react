import React, { useState } from 'react'
import '../css/Home.css';
import { PolarArea } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import ChartDataReliability from './ChartDataReliability';
import { Doughnut } from 'react-chartjs-2';
import DataReliabilityChart from './DataReliabilityChart';
import DataReliabilityTest from './DataReliabilityTest';
import Test from './Test';
import SourceTableView from './SourceTableView';
import { SwipeableDrawer } from '@mui/material';
import DataReliabilityTable from './DataReliabilityTable';


function DataReliability() {
    const [selectedBarIndex, setSelectedBarIndex] = useState(-1);
    const [isTooltipFixed, setIsTooltipFixed] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const genColor = (colorid) => {
        var color = [];
        for (var i = 0; i < 21; i++) {
            color.push(colorid)
        }
        return color
    }
    const [backgroundColor, setBackgroundColor] = useState({ pass: genColor('#5470c6'), fail: genColor('#ee6666'), warning: genColor('#fac858') })


    const handleClickOutsideTooltip = (event) => {
        if (isTooltipFixed && event.target.className !== 'tooltip-trigger') {
            setIsTooltipFixed(false);
        }
    };

    const CustomTooltip = ({ data }) => {
        if (isTooltipFixed && selectedBarIndex !== -1) {
            // Get the data for the selected bar
            const totalPass = data.datasets[0].data[selectedBarIndex];
            const totalFail = data.datasets[1].data[selectedBarIndex];
            const totalWarn = data.datasets[2].data[selectedBarIndex];
            // console.log(selectedBarData);
            console.log(tooltipPosition)
            const tooltipStyle = {
                position: 'absolute',
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                zIndex: '1',
                width: '20%'
            };

            return (
                <div className="p-2 card" style={tooltipStyle}>
                    <div className='d-flex'>
                        <p className='mb-0 d-flex'><div style={{ height: '10px', width: '10px', backgroundColor: '#5470c6', marginTop: '8px', marginRight: '2px' }}></div>Pass: {totalPass} &nbsp;%</p>
                    </div>
                    <div className='d-flex justify-content-between'>

                        <p className='mb-0 d-flex'><div style={{ height: '10px', width: '10px', backgroundColor: '#ee6666', marginTop: '8px', marginRight: '2px' }}></div>Fail: {totalFail}  &nbsp;%</p>
                    </div>
                    <div className='d-flex '>

                        <p className='mb-0 d-flex'><div style={{ height: '10px', width: '10px', backgroundColor: '#fac858', marginTop: '8px', marginRight: '2px' }}></div>Warn: {totalWarn}  &nbsp;%</p>
                    </div>
                    <button onClick={toggleDrawer(true)} className='btn btn-info'>History</button>
                </div>
            );
        }
        return null;
    };

    const handleBarClick = (event, elements) => {
        if (elements.length > 0) {
            const clickedBarIndex = elements[0].index;
            setSelectedBarIndex(clickedBarIndex);
            const chartInstance = elements[0].chart;
            // const { x, y } = chartInstance.getDatasetMeta(0).data[clickedBarIndex].getCenterPoint();

            // // Calculate the tooltip's position relative to the canvas
            // const canvasPosition = chartInstance.canvas.getBoundingClientRect();
            // const tooltipX = canvasPosition.left + x;
            // const tooltipY = canvasPosition.top + y;
            const x = elements[0].element.x;
            const y = elements[0].element.y;
            console.log(x, y)


            // Set the tooltip position
            setTooltipPosition({ x, y });
            setIsTooltipFixed(!isTooltipFixed);

            var newBackground = { pass: genColor('#5470c6'), fail: genColor('#ee6666'), warning: genColor('#fac858') }
            newBackground.pass[clickedBarIndex] = '#032ba5';
            newBackground.fail[clickedBarIndex] = '#c12424';
            newBackground.warning[clickedBarIndex] = '#f4f833';
            setBackgroundColor(newBackground)

        }
    };
    console.log(selectedBarIndex)
    const sourceOptions = {
        type: 'bar',
        indexAxis: 'y', // Set the index axis to 'y' for vertical bars
        onClick: (event, elements) => handleBarClick(event, elements),
        scales: {
            x: {
                beginAtZero: true,
            }
        },
        scales: {

            x: {
                stacked: true,
                max: 100
            },
            y: {
                stacked: true,
            },

        },
        plugins: {
            title: {
                display: false,
                text: 'Checks By Sources',
                font: {
                    size: 24,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#333',
                }
            },
            tooltip: {
                enabled: false,
                mode: 'nearest', // Display tooltips for all datasets at the same index // Don't intersect with other tooltips
            },
        },
    };

    var sourceData = {
        labels: [
            "Veeva",
            "IQVIA Valuetrak",
            "Cardinal 3PL",
            "ConcertAI",
            "IQVIA NPAW",
            "ENOVA Details Report",
            "IQVIA Plantrak - ADW",
            "IQVIA Custom NBRxW",
            "IQVIA SOBW",
            "PX Payer Spine",
            "IQVIA NPAM",
            "IQVIA LAAD",
            "PDRP",
            "IQVIA NSP",
            "IQVIA FIA",
            "IQVIA Custom NBRxM",
            "IQVIA SOBM",
            "MMIT",
            "IQVIA NPA-MD",
            "AMA_NOCONTACT",
            "QPharma- DTP Samples"
        ],
        datasets: [
            {
                label: 'Pass',
                backgroundColor: backgroundColor.pass,
                borderColor: 'transparent',
                borderWidth: 2,
                data: [
                    100,
                    100,
                    94.2446,
                    95.3748,
                    96.7742,
                    74.1667,
                    89.0034,
                    98.1818,
                    98.2906,
                    100,
                    84.6154,
                    80.8219,
                    95.2381,
                    100,
                    88.8889,
                    100,
                    100,
                    100,
                    97.9167,
                    100,
                    100
                ],
            },
            {
                label: 'Fail',
                backgroundColor: backgroundColor.fail,
                borderColor: 'transparent',
                borderWidth: 2,
                data: [
                    0,
                    0,
                    2.8777,
                    4.6252,
                    1.6129,
                    5.8333,
                    7.9038,
                    1.8182,
                    1.7094,
                    0,
                    3.8462,
                    9.589,
                    4.7619,
                    0,
                    4.4444,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
            },
            {
                label: 'Warning',
                backgroundColor: backgroundColor.warning,
                borderColor: 'transparent',
                borderWidth: 2,
                data: [
                    0,
                    0,
                    2.8777,
                    0,
                    1.6129,
                    20,
                    3.0928,
                    0,
                    0,
                    0,
                    11.5385,
                    9.589,
                    0,
                    0,
                    6.6667,
                    0,
                    0,
                    0,
                    2.0833,
                    0,
                    0
                ],
            }],
    }

    const chartData = {
        labels: ['Mandatory Fields Check', 'Null Validation', 'Row Count Validation', 'Relationship Validation', 'Max Length Check', 'Schema Check', 'Mandatory Fields Check', 'Null Validation', 'Row Count Validation'],
        datasets: [
            {
                data: [30, 40, 50, 20, 10, 5, 33, 66, 49], // Your data values here
                backgroundColor: [' #3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6', '#95a5a6', '#ff6b6b', ' #ffaa2b', '#cc66cc'], // Colors for the segments
            },
        ],
    };
    const chartoption = {
        legend: {
            display: false
        },
        plugins: {
            legend: {
                display: false,
            }, tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;// Get the y-value from the data
                        return `${value}%`; // Append the percentage sign to the label
                    },
                },
            }
        },
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsTooltipFixed(false)
        setIsOpen(open);
    };

    const genNum = (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    }
    console.log({ pass: genNum(), fail: genNum(), warning: genNum() })
    const [incidentNum, setIncidentNum] = useState({ pass: genNum(60), fail: genNum(20), warning: genNum(10) })

    const data = {
        labels: ['CARDINAL_REPORT_INVENTORY'],
        datasets: [
            {
                label: 'Pass',
                backgroundColor: '#5470c6',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [incidentNum.pass],
                barThickness: 10,
            },
            {
                label: 'Fail',
                backgroundColor: '#ee6666',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [incidentNum.fail],
                barThickness: 10,
            },
            {
                label: 'Warning',
                backgroundColor: '#fac858',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [incidentNum.warning],
                barThickness: 10,
            }],
    }

    // Chart options
    const handleIncident = (event, elements) => {

        if (elements.length > 0) {
            setIncidentNum({ pass: genNum(60), fail: genNum(20), warning: genNum(10) })
        }
    }
    const options = {
        type: 'bar',
        indexAxis: 'y', // Set the index axis to 'y' for vertical bars
        // scales: {
        //   x: {
        //     beginAtZero: true,
        //   },
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
        scales: {
            xAxes: [{
                barThickness: 10
            }]
        }
    };



    const data2 = {
        labels: ['CARDINAL_REPORT_INVENTORY'],
        datasets: [
            {
                label: 'Mandatory Fields Check',
                backgroundColor: '#3498db',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [12],
                barThickness: 20,
            },
            {
                label: 'Null Validation',
                backgroundColor: '#2ecc71',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [8],
                barThickness: 20,
            },
            {
                label: 'Row Count Validation',
                backgroundColor: '#e74c3c',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [5],
                barThickness: 20,
            },
            {
                label: 'Relationship Validation',
                backgroundColor: '#f1c40f',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [12],
                barThickness: 20,
            },
            {
                label: 'Max Length Check',
                backgroundColor: '#9b59b6',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [8],
                barThickness: 20,
            },
            {
                label: 'Schema Check',
                backgroundColor: '#95a5a6',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [5],
                barThickness: 20,
            }, {
                label: 'Mandatory Fields Check',
                backgroundColor: '#ff6b6b',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [12],
                barThickness: 20,
            },
            {
                label: 'Null Validation',
                backgroundColor: '#ffaa2b',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [8],
                barThickness: 20,
            },
            {
                label: 'Row Count Validation',
                backgroundColor: '#cc66cc',
                borderColor: 'transparent',
                borderWidth: 2,
                data: [5],
                barThickness: 20,
            }],
    }

    const options2 = {
        type: 'bar',
        indexAxis: 'y', // Set the index axis to 'y' for vertical bars
        onClick: (event, elements) => handleIncident(event, elements),
        scales: {
            x: {
                beginAtZero: true,
            }
        },
        scales: {

            x: {
                stacked: true,
                display: false
            },
            y: {
                stacked: true,
                display: false
            },

        },
        plugins: {
            title: {
                display: false,
                text: 'Checks By Sources',
                font: {
                    size: 24,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#333',
                }
            },
            legend: {
                display: true, // Display the legend
                position: 'top', // Position of the legend (top, bottom, left, right, or custom)
                labels: {
                    font: {
                        size: 10
                    }, // Adjust the font size of the legend labels
                },
            },
        }
    };

    const [lookback, setLookback] = useState('1');
    const toggleLookback = tab => {
        if (lookback !== tab) {
            setLookback(tab);
        }
    }



    const [lookbackHis, setLookbackHis] = useState('1');
    const toggleLookbackHis = tab => {
        if (lookbackHis !== tab) {
            setLookbackHis(tab);
        }
    }

    return (
        <div className='p-4 mt-5' >
            <div className='row mb-0'>
                <div className='col-7'></div>
                <div className='col-5 ps-3 adq-source'>
                    <div>
                        <div className='d-flex h-100 align-items-center'>
                            <p className='mb-0' style={{ fontSize: '14px' }}>Look Back Period : </p>
                            <button type="button" className={`adq-button ${lookback === '1' ? 'active' : ''}`} onClick={() => { toggleLookback('1'); }}>1 Week</button>
                            <button type="button" className={`adq-button ${lookback === '2' ? 'active' : ''}`} onClick={() => { toggleLookback('2'); }}>1 Month</button>
                            <button type="button" className={`adq-button ${lookback === '3' ? 'active' : ''}`} onClick={() => { toggleLookback('3'); }} >3 Month</button>
                            <button type="button" className={`adq-button ${lookback === '4' ? 'active' : ''}`} onClick={() => { toggleLookback('4'); }} >Custom</button>
                            <input type='text' placeholder='Enter' className='form-control ms-1' style={{ width: '13%', height: '26px' }}></input>
                        </div>
                        {
                            lookback === '4' ?
                                <div className='row '>
                                    <div className='col-6 '>
                                        <label className='fs-6'>Start Date</label>
                                        <input type="date" className='form-control w-100'></input>
                                    </div>
                                    <div className=' col-6 '>
                                        <label className='fs-6'>End Date</label>
                                        <input type="date" className='form-control w-100'></input>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>

            <div className='row mt-0'>
                <div className='col-6 px-1'>
                    <div className='card p-3 adq-card h-100'>
                        <div className='d-flex'>
                            <h2 className='adq-source'>Urovant Pharma </h2>
                            <p>&nbsp; - Snowflake</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='me-2'>
                                <p className='mb-0'>Sources</p>
                                <span class="counter font-weight-normal">20</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Tables</p>
                                <span class="counter font-weight-normal">30</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Rules</p>
                                <span class="counter font-weight-normal">977</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Checks</p>
                                <span class="counter font-weight-normal">500</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Pass</p>
                                <span class="counter font-weight-normal">1200</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Fail</p>
                                <span class="counter font-weight-normal">55</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Warning</p>
                                <span class="counter font-weight-normal">77</span>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col-3 px-1'>
                    <div className='card p-3 adq-card' >
                        {/* <div className='d-flex'> */}
                        <h2 className='adq-source'>Monitors</h2>
                        {/* <PolarArea data={data} options={options} style={{
                            width: "120px",
                            height: '120px',
                        }} /> */}
                        {/* </div> */}
                        <div style={{ height: "100px" }}>
                            <Doughnut data={chartData} options={chartoption} className='mx-auto' />
                        </div>
                    </div>
                </div>
                <div className='col-3 px-1'>
                    <div className='card p-3 adq-card h-100'>
                        <div className='d-flex'>
                            <h2 className='adq-source'>Power BI </h2>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='me-2'>
                                <p className='mb-0'>Sources</p>
                                <span class="counter font-weight-normal">20</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Tables</p>
                                <span class="counter font-weight-normal">30</span>
                            </div>
                            <div className='me-2'>
                                <p className='mb-0'>Rules</p>
                                <span class="counter font-weight-normal">977</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-6 px-1'>
                    <div className='card  adq-card p-3 h-100'>
                        <div className='d-flex justify-content-between'>
                            <h2 className='adq-source text-center'>Checks By Sources</h2>
                            <button className='btn btn-sm btn-info h-75 pt-0' onClick={() => setBackgroundColor({ pass: genColor('#5470c6'), fail: genColor('#ee6666'), warning: genColor('#fac858') })}>Reset</button>
                        </div>
                        <Bar data={sourceData} options={sourceOptions} width={100} height={110} />
                        <CustomTooltip data={sourceData} />
                    </div>
                </div>
                <div className='col-6 px-1'>
                    <div className='row'>
                        <div className='col-6 pe-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Row Count Checker"></ChartDataReliability> */}
                                <DataReliabilityTest title="Row Count Checker"></DataReliabilityTest>
                            </div>
                        </div>
                        <div className='col-6 ps-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Null Detector"></ChartDataReliability> */}
                                <DataReliabilityTest title="Null Detector"></DataReliabilityTest>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6 pe-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Duplication Detector"></ChartDataReliability> */}
                                <DataReliabilityTest title="Duplication Detector"></DataReliabilityTest>
                            </div>
                        </div>
                        <div className='col-6 ps-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Validity Checker"></ChartDataReliability> */}
                                <DataReliabilityTest title="Validity Checker"></DataReliabilityTest>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6 pe-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Mandatory Field Inspector"></ChartDataReliability> */}
                                <DataReliabilityTest title="Mandatory Field Inspector"></DataReliabilityTest>
                            </div>
                        </div>
                        <div className='col-6 ps-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Relationship Validator"></ChartDataReliability> */}
                                <DataReliabilityTest title="Relationship Validator"></DataReliabilityTest>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12  px-0'>
                    <div className='d-flex justify-content-between mt-2'>
                        <div className='col-4 px-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Mandatory Field Inspector"></ChartDataReliability> */}
                                <DataReliabilityTest title="Relationship Validator"></DataReliabilityTest>
                            </div>
                        </div>
                        <div className='col-4 px-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Relationship Validator"></ChartDataReliability> */}
                                <DataReliabilityTest title="Relationship Validator"></DataReliabilityTest>
                            </div>
                        </div>
                        <div className='col-4 px-1'>
                            <div className='card p-3 adq-card'>
                                {/* <ChartDataReliability title="Relationship Validator"></ChartDataReliability> */}
                                <DataReliabilityTest title="Relationship Validator"></DataReliabilityTest>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SwipeableDrawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                PaperProps={{ style: { width: "55%" } }}
                transitionDuration={1000}
            >
                <div role="presentation">
                    <div className='p-5 pt-3'>
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-8 ps-3 adq-source'>
                                <div>
                                    <div className='d-flex h-100 align-items-center'>
                                        <p className='mb-0' style={{ fontSize: '14px' }}>Look Back Period : </p>
                                        <button type="button" style={{ fontSize: '10px' }} className={`adq-button ${lookbackHis === '1' ? 'active' : ''}`} onClick={() => { toggleLookbackHis('1'); }}>1 Week</button>
                                        <button type="button" style={{ fontSize: '10px' }} className={`adq-button ${lookbackHis === '2' ? 'active' : ''}`} onClick={() => { toggleLookbackHis('2'); }}>1 Month</button>
                                        <button type="button" style={{ fontSize: '10px' }} className={`adq-button ${lookbackHis === '3' ? 'active' : ''}`} onClick={() => { toggleLookbackHis('3'); }} >3 Month</button>
                                        <button type="button" style={{ fontSize: '10px' }} className={`adq-button ${lookbackHis === '4' ? 'active' : ''}`} onClick={() => { toggleLookbackHis('4'); }} >Custom</button>
                                        <input type='text' placeholder='Enter' className='form-control ms-1' style={{ width: '13%', height: '20px' }}></input>
                                    </div>
                                    {
                                        lookbackHis === '4' ?
                                            <div className='row '>
                                                <div className='col-6 '>
                                                    <label style={{ fontSize: '12px' }}>Start Date</label>
                                                    <input type="date" style={{ height: '27px' }} className='form-control w-100'></input>
                                                </div>
                                                <div className=' col-6 '>
                                                    <label style={{ fontSize: '12px' }}>End Date</label>
                                                    <input type="date" style={{ height: '27px' }} className='form-control w-100'></input>
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-2 px-1'>
                                <div className='card h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>TOTAL TABLES</p>
                                        <p className='mb-0 text-center'>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 px-1'>
                                <div className='card h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>INCIDENTS</p>
                                        <p className='mb-0 text-center'>4</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 px-1'>
                                <div className='card h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>ERRORS</p>
                                        <p className='mb-0 text-center'>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 px-1'>
                                <div className='card  h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>WARNINGS</p>
                                        <p className='mb-0 text-center'>3</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 px-1'>
                                <div className='card  h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>INCIDENTS FREE TABLES</p>
                                        <p className='mb-0 text-center'>0</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 px-1'>
                                <div className='card h-100 adq-card'>
                                    <div className='my-auto'>
                                        <p className='text-center mb-0 mt-1' style={{ fontSize: '13px', fontWeight: '700' }}>AVERAGE</p>
                                        <p className='mb-0 text-center'>15.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Bar data={data2} options={options2} width={100} height={20} />
                        <div className='d-flex justify-content-between'>
                            <p className='adq-source'>Incident Table Dashboard</p>
                            <button class="btn btn-sm btn-info h-75 pt-0" onClick={() => { handleIncident(3, [8]) }}>Reset</button>
                        </div>
                        <Bar data={data} options={options} width={100} height={20} />
                        <div className="mt-3">
                            {/* <SourceTableView ></SourceTableView> */}
                            <DataReliabilityTable></DataReliabilityTable>
                        </div>
                    </div>
                </div>

            </SwipeableDrawer>
            {isTooltipFixed && window.addEventListener('click', handleClickOutsideTooltip)
            }
        </div >
    )
}

export default DataReliability;