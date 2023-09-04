import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import '../css/Home.css';

function DataReliabilityTable() {
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);
    useEffect(() => {
        if (tableRef.current && !dataTableRef.current) {
            // Only initialize the DataTable if it hasn't been initialized before
            console.log('Initializing DataTable...');
            const dataTableInstance = $(tableRef.current).DataTable({
                pageLength: 5,
                lengthChange: false,
                language: {
                    searchPlaceholder: "Search records",
                }
            });

            dataTableRef.current = dataTableInstance; // Store the DataTable instance
            if (dataTableRef.current) {
                dataTableRef.current.order([1, 'asc']).draw();
            }
        }
    }, []);
    const tableData = [
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Null Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Row Count Validation",
            "fail",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Null Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Mandatory Fields Check",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "Duplicate Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Relationship Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Row Count Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_COPAY_REDEMPTIONS",
            "Duplicate Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Mandatory Fields Check",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "Duplicate Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_COPAY_REDEMPTIONS",
            "Row Count Validation",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_COPAY_REDEMPTIONS",
            "Mandatory Fields Check",
            "pass",
            "0"
        ],
        [
            "ConcertAI",
            "08-28-2023 10:50:05",
            "CONCERTAI_OUTGOING_COPAY_REDEMPTIONS",
            "Freshness Validation",
            "pass",
            "0"
        ]
    ]

    return (
        <div>
            <div className='table-responsive'>
                <table id="data-table-basic" class="table table-striped" ref={tableRef}>
                    <thead>
                        <tr>
                            <th>Table Name</th>
                            <th>Run At</th>
                            <th>Test Name</th>
                            <th>Status</th>
                            <th>Discrepancy Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((ele) => {
                                return (
                                    <tr className={ele[4] == "fail" ? 'bg-custom' : null}>
                                        <td >{ele?.[2]}</td>
                                        <td >{ele?.[1]}</td>
                                        <td >{ele?.[3]}</td>
                                        <td >{ele?.[4]}</td>
                                        <td >{ele?.[5]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th>Source</th>
                            <th>Run At</th>
                            <th>Table Name</th>
                            <th>Test Name</th>
                            <th>Status</th>
                            <th>Discrepancy Count</th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>
        </div>
    )
}

export default DataReliabilityTable