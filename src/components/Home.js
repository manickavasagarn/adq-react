import React from 'react'
import "../css/Home.css"
import SourceSummary from './SourceSummary'
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState } from 'react';
import DataVintage from './DataVintage';

Chart.register(...registerables);
function Home() {
    const data = {
        type: 'bar', // Use 'bar' type for horizontal bar chart
        data: {
            labels: [
                "ConcertAI", "IQVIA Plantrak - ADW", "IQVIA FIA", "IQVIA SOBM",
                "Cardinal 3PL", "IQVIA Custom NBRxW", "MMIT", "IQVIA NPAW",
                "IQVIA NPAM", "IQVIA LAAD", "PDRP", "ENOVA Details Report"
            ],
            datasets: [{
                label: 'Source-Fail',
                data: [
                    68, 30, 9, 4,
                    20, 1, 3, 2,
                    1, 7, 2, 6
                ],
                backgroundColor: '#ee6666',
                barThickness: 10,
            }],
        },
        options: {
            indexAxis: 'y', // Use 'y' for horizontal bar chart
            // scales: {
            //     xAxes: [{
            //         barThickness : 73
            //     }],
            //     x: {
            //         beginAtZero: true,
            //         barPercentage: 0.1,
            //     },
            // },
            scales: {
                xAxes: [{
                    barThickness: 10
                }]
            }
        },
    };

    const [lookback, setLookback] = useState('1');
    const toggleLookback = tab => {
        if (lookback !== tab) {
            setLookback(tab);
        }
    }

    return (
        <div className='p-4 mt-5'>
            <div className='row mb-3'>
                <div className='col-7'></div>
                <div className='col-5 ps-3 adq-source'>
                    <div>
                        <div className='d-flex h-100 align-items-center'>
                            <p className='mb-0' style={{ fontSize: '14px' }}>Look Back Period : </p>
                            <button type="button" className={`adq-button ${lookback === '1' ? 'active' : ''}`} onClick={() => { toggleLookback('1'); }}>1 Week</button>
                            <button type="button" className={`adq-button ${lookback === '2' ? 'active' : ''}`} onClick={() => { toggleLookback('2'); }}>1 Month</button>
                            <button type="button" className={`adq-button ${lookback === '3' ? 'active' : ''}`} onClick={() => { toggleLookback('3'); }} >3 Month</button>
                            <button type="button" className={`adq-button ${lookback === '4' ? 'active' : ''}`} onClick={() => { toggleLookback('4'); }} >Custom</button>
                            <input type='text' placeholder='Enter' className='form-control ms-1' style={{width:'13%',height:'26px'}}></input>
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
            <div className='d-flex justify-content-between'>
                <div className='col-2'>
                    <div className='card p-3 adq-card'>
                        <div className='row'>
                            <div className='col-8'>
                                <span className='counter'>977</span>
                                <p className='mb-0'>Checks</p>
                            </div>
                            <div className='col-4'>
                                <div className='text-center pt-2 d-flex justify-content-center h-100 align-items-center'><i class="fa-solid fa-circle-check adq-icon" style={{ color: "#4da6ff" }}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='card p-3 adq-card'>
                        <div className='row'>
                            <div className='col-8'>
                                <span className='counter'>875</span>
                                <p className='mb-0'>Passed</p>
                            </div>
                            <div className='col-4'>
                                <div className='text-center pt-2 d-flex justify-content-center h-100 align-items-center'><i class="fa-solid fa-thumbs-up adq-icon" style={{ color: "mediumseagreen" }}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='card p-3 adq-card'>
                        <div className='row'>
                            <div className='col-8'>
                                <span className='counter'>59</span>
                                <p className='mb-0'>Fails</p>
                            </div>
                            <div className='col-4'>
                                <div className='text-center pt-2 d-flex justify-content-center h-100 align-items-center'><i class="fa-solid fa-thumbs-down adq-icon" style={{ color: "red" }}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='card p-3 adq-card'>
                        <div className='row'>
                            <div className='col-8'>
                                <span className='counter'>34</span>
                                <p className='mb-0'>Warnings</p>
                            </div>
                            <div className='col-4'>
                                <div className='text-center pt-2 d-flex justify-content-center h-100 align-items-center'><i class="fa-solid fa-triangle-exclamation adq-icon" style={{ color: "#dcdc22" }}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='card p-3 adq-card'>
                        <div className='row'>
                            <div className='col-8'>
                                <span className='counter'>9</span>
                                <p className='mb-0'>Invalid</p>
                            </div>
                            <div className='col-4'>
                                <div className='text-center pt-2 d-flex justify-content-center h-100 align-items-center'><i class="fa-solid fa-circle-xmark adq-icon" style={{ color: "orange" }}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card mt-3 pb-3 adq-card'>
                <div className='row'>
                    <div className='col-4 mt-4'>
                        <div className='mt-5'>
                            <Bar data={data.data} options={data.options} width={100} height={100} />
                        </div>
                    </div>
                    <div className='col-8'>
                        <h2 className='adq-source ms-2 mt-3'>Source Summary</h2>
                        <SourceSummary></SourceSummary>
                    </div>
                </div>
            </div>
            <div className='card mt-3 pb-3 adq-card'>
                <DataVintage></DataVintage>
            </div>
        </div>
    )
}

export default Home