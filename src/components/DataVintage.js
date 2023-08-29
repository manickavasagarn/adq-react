import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import '../css/Home.css';

function DataVintage() {
    const tableRef = useRef(null);
    const dataTableRef = useRef(null); // Store a reference to the DataTable instance


    useEffect(() => {
        if (tableRef.current && !dataTableRef.current) {
            // Only initialize the DataTable if it hasn't been initialized before
            console.log('Initializing DataTable...');
            const dataTableInstance = $(tableRef.current).DataTable({
                language: {
                    searchPlaceholder: "Search records",
                }
            });

            dataTableRef.current = dataTableInstance; // Store the DataTable instance
        }
    }, []);

    const tableData = [
        [
            "08-29-2023 02:26:31",
            "QPharma- DTP Samples",
            "BRC Samples",
            "BRC Samples",
            "BRC_SAMPLE_ORDER_STATUS",
            "BRC_BASE",
            "12-19-2019",
            "08-23-2023",
            "Acknowledged BRC samples collected by HCPs",
            "Weekly",
            "Wed"
        ],
        [
            "08-29-2023 01:36:32",
            "ConcertAI",
            "Fact SP",
            "SP Patient ",
            "CONCERTAI_OUTGOING_SPP_TRANSACTIONS",
            "SP_HUB_TRANSACTIONS_BASE",
            "01-31-2022",
            "08-26-2023",
            "Patient detail, RX for Adbry in SP",
            "Daily",
            "Daily"
        ],
        [
            "08-29-2023 01:35:40",
            "ConcertAI",
            "Fact HUB",
            "HUB Patient ",
            "CONCERTAI_OUTGOING_HUB_TRANSACTIONS",
            "SP_HUB_TRANSACTIONS_BASE",
            "01-31-2022",
            "08-27-2023",
            "Patient detail, RX for Adbry in HUB",
            "Daily",
            "Daily"
        ],
        [
            "08-29-2023 00:31:34",
            "IQVIA NSP",
            "National Sales Perspective",
            "NSP_MONTHLY",
            "NSP_BASE",
            "08-30-2017",
            "07-30-2023",
            "Monthly",
            "Monthly"
        ],
        [
            "08-28-2023 23:32:54",
            "ENOVA Details Report",
            "Speaker Program Attendees",
            "Attendees",
            "ATTENDEE_REPORT",
            "MKTDB_SPEAKERPROGRAM_ATTENDEE_REPORT_BASE",
            "03-29-2021",
            "10-25-2023",
            "The count of attendee, speaker details",
            "Weekly",
            "Thu"
        ],
        [
            "08-28-2023 23:32:17",
            "ENOVA Details Report",
            "Speaker Programs",
            "Programs",
            "ENOVA_ENGAGEMENT_REPORT",
            "MKTDB_SPEAKERPROGRAM_ATTENDEE_REPORT_BASE",
            "03-29-2021",
            "10-25-2023",
            "The mode of communication",
            "Weekly",
            "Thu"
        ],
        [
            "08-28-2023 20:00:00",
            "Veeva",
            "Segment",
            "Segment alignment",
            "VEEVA_CRM_ACCOUNT",
            "CALL_PLAN_BASE",
            "03-24-2020",
            "08-27-2023",
            "Account and Segment inforamation",
            "Daily",
            "wed"
        ],
        [
            "08-28-2023 20:00:00",
            "Veeva",
            "Target",
            "Target count",
            "VEEVA_CRM_CYCLE_PLAN_TARGET_VOD__C",
            "CALL_PLAN_BASE",
            "08-29-2019",
            "08-14-2023",
            "Target set based on the reps for the quarterly level",
            "Quarterly",
            "wed"
        ],
        [
            "08-28-2023 20:00:00",
            "Veeva",
            "TOT",
            "Time off terriory",
            "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C",
            "TOT_BASE",
            "09-10-2019",
            "08-27-2023",
            "Tracks reps quantity of time off",
            "Daily",
            "wed"
        ],
        [
            "08-28-2023 20:00:00",
            "Veeva",
            "Calls",
            "Calls details",
            "VEEVA_CRM_CALL2_VOD__C",
            "CALL_ACTIVITY_BASE",
            "09-01-2019",
            "08-27-2023",
            "Tracks the calls made by the reps",
            "Daily",
            "wed"
        ],
        [
            "08-28-2023 20:00:00",
            "Veeva",
            "Samples",
            "Samples details",
            "VEEVA_CRM_CALL2_SAMPLE_VOD__C",
            "SAMPLES_BASE",
            "09-01-2019",
            "08-27-2023",
            "Details regarding the samples provided by reps",
            "Daily",
            "wed"
        ],
        [
            "08-28-2023 10:32:25",
            "IQVIA Valuetrak",
            "Valuecentric",
            "Quantity detail",
            "VALUE_CENTRIC",
            "EDI_BASE",
            "02-24-2023",
            "08-26-2023",
            "Quantity count in inventory and units",
            "Daily",
            "Daily"
        ],
        [
            "08-28-2023 07:11:32",
            "IQVIA NPAW",
            "NPA Weekly",
            "NPA ",
            "NPA_RX_WEEKLY",
            "NPA_RX_BASE",
            "08-12-2021",
            "08-17-2023",
            "National level transactions",
            "Weekly",
            "Mon"
        ],
        [
            "08-25-2023 11:31:51",
            "IQVIA Custom NBRxW",
            "NBRx",
            "NBRx",
            "HCP_TRX_NBRX_WEEKLY",
            "HCP_NBRX_BASE",
            "01-06-2022",
            "08-10-2023",
            "AD market NBRx. ",
            "Weekly",
            "Wed"
        ],
        [
            "08-25-2023 11:31:32",
            "IQVIA SOBW",
            "SOB Switch",
            "Patient Source of Business count.",
            "AD_SOB_SWITCH_WEEKLY",
            "SOB_SWITCH_BASE",
            "01-13-2022",
            "08-10-2023",
            "Weekly",
            "Mon"
        ],
        [
            "08-25-2023 11:31:27",
            "IQVIA SOBW",
            "SOB Projected Patients",
            "Projected Patient Count",
            "AD_SOB_PROJECTED_PATIENTS_WEEKLY",
            "SOB_PROJECTED_PATIENTS_BASE",
            "01-06-2022",
            "08-10-2023",
            "Weekly",
            "Mon"
        ],
        [
            "08-25-2023 11:31:19",
            "IQVIA SOBW",
            "SOB Rx",
            "Rx Transactions",
            "AD_SOB_NBRX_WEEKLY",
            "SOB_NBRX_BASE",
            "01-06-2022",
            "08-10-2023",
            "Weekly",
            "Mon"
        ],
        [
            "08-23-2023 00:31:42",
            "IQVIA Plantrak - ADW",
            "XPT- AD Weekly",
            "Rx Transactions",
            "XPT_PLANTRAK_AD_MARKET",
            "XPT_TRANSACTION_BASE",
            "07-30-2021",
            "08-10-2023",
            "Prescription transactions provided on a weekly basis.",
            "Weekly",
            "Thu"
        ],
        [
            "08-21-2023 01:31:09",
            "PDRP",
            "PDRP_Monthly",
            "NULL",
            "REF_PDRP",
            "NULL",
            "NO-DATE",
            "NO-DATE",
            "NULL",
            "NULL",
            "Quarterly"
        ],
        [
            "08-20-2023 21:29:48",
            "IQVIA NPA-MD",
            "Market Dynamics",
            "NPA monthly",
            "NPAMD_MONTHLY_LRXMM246_MD2_TM_DIM_V2",
            "BRANDED_NBRX",
            "NO-DATE",
            "NO-DATE",
            "National level transactions",
            "Monthly",
            "Monthly"
        ],
        [
            "08-16-2023 07:31:37",
            "IQVIA NPAM",
            "NPA Monthly",
            "NPA monthly",
            "NPA_RX_MONTHLY",
            "NPA_RX_BASE",
            "08-30-2017",
            "07-30-2023",
            "National level transactions",
            "Monthly",
            "Monthly"
        ],
        [
            "08-10-2023 19:48:23",
            "PX Payer Spine",
            "Plan Hierarchy",
            "Plan hierarchy",
            "PX_PAYERSPINE_PAYER_PLAN_HIERARCHY",
            "08-09-2023",
            "08-09-2023",
            "Plan hierarchy",
            "Monthly",
            "Monthly"
        ],
        [
            "08-08-2023 01:38:55",
            "MMIT",
            "Payer",
            "MMIT_DATAFEED_PLANSCONTROLLER_MCO",
            "FORMULARY_DETAIL",
            "10-31-2020",
            "06-30-2023",
            "Monthly",
            "Monthly"
        ],
        [
            "07-31-2023 10:31:37",
            "IQVIA SOBM",
            "SOB Switch",
            "Projected Patient Count",
            "AD_SOB_SWITCH_MONTHLY",
            "SOB_SWITCH_BASE",
            "07-30-2022",
            "06-29-2023",
            "Monthly",
            "Monthly"
        ],
        [
            "07-31-2023 10:31:31",
            "IQVIA SOBM",
            "SOB Projected Patients",
            "Patient Source of Business count.",
            "AD_SOB_PROJECTED_PATIENTS_MONTHLY",
            "SOB_PROJECTED_PATIENTS_BASE",
            "07-30-2022",
            "06-29-2023",
            "Monthly",
            "Monthly"
        ],
        [
            "07-31-2023 10:31:25",
            "IQVIA SOBM",
            "SOB Rx",
            "NBRx",
            "AD_SOB_NBRX_MONTHLY",
            "SOB_NBRX_BASE",
            "07-30-2022",
            "06-29-2023",
            "AD market NBRx. ",
            "Monthly",
            "Monthly"
        ],
        [
            "07-31-2023 05:31:56",
            "IQVIA Custom NBRxM",
            "NBRx",
            "NBRx",
            "HCP_TRX_NBRX_MONTHLY",
            "HCP_NBRX_BASE",
            "07-30-2022",
            "06-29-2023",
            "AD market NBRx. ",
            "Monthly",
            "Monthly"
        ],
        [
            "07-28-2023 10:31:28",
            "IQVIA FIA",
            "RX FACT",
            "Rx claims",
            "FIA_RX_FACT",
            "FIA_BASE",
            "06-30-2021",
            "06-29-2023",
            "OPC Payment",
            "Monthly",
            "Monthly"
        ],
        [
            "07-20-2023 02:31:26",
            "AMA_NOCONTACT",
            "AMA",
            "NULL",
            "REF_AMA_NOCONTACT",
            "NULL",
            "NO-DATE",
            "NO-DATE",
            "NULL",
            "NULL",
            "Quarterly"
        ],
        [
            "06-23-2023 09:23:59",
            "Cardinal 3PL",
            "Lot Movement",
            "Transactions details ",
            "3PL_LOT_MOVEMENT_BASE",
            "06-21-2023",
            "06-21-2023",
            "Movement in lot",
            "Daily",
            "Daily"
        ],
        [
            "06-23-2023 09:23:58",
            "Cardinal 3PL",
            "Inventory",
            "Quantity detail",
            "3PL_INVENTORY_BASE",
            "03-27-2023",
            "06-21-2023",
            "Quantity in the inventory",
            "Daily",
            "Daily"
        ],
        [
            "06-23-2023 09:23:57",
            "Cardinal 3PL",
            "Gross Sale",
            "Gross sales",
            "3PL_GROSS_SALES_BASE",
            "06-21-2023",
            "06-21-2023",
            "Sales values",
            "Daily",
            "Daily"
        ],
        [
            "06-23-2023 09:23:56",
            "Cardinal 3PL",
            "Chargeback",
            "Chargeback quantity detail",
            "3PL_CHARGEBACK_BASE",
            "06-21-2023",
            "06-21-2023",
            "The wholesaler details for reloading",
            "Daily",
            "Daily"
        ],
        [
            "05-09-2023 20:00:00",
            "FINANCE",
            "Finance Gross",
            "Gross sales",
            "FINANCE_GROSS_BETA",
            "FINANCE_RPT",
            "12-31-2021",
            "12-30-2023",
            "Gross sales",
            "Monthly",
            "Monthly"
        ],
        [
            "02-23-2023 19:00:00",
            "ZOOMRX PET REPORT",
            "Marketing KPIs",
            "MKTDB_ZOOM_RESPONSE_DATA",
            "MKTDB_ZOOM_RESPONSE_DATA",
            "03-31-2021",
            "12-31-2022",
            "Communication details",
            "Monthly",
            "Monthly"
        ],
        [
            "02-23-2023 19:00:00",
            "ZOOMRX PET REPORT",
            "Marketing KPIs",
            "MKTDB_ZOOM_BENCHMARK_DATA",
            "MKTDB_ZOOM_BENCHMARK_DATA",
            "03-31-2020",
            "12-30-2022",
            "Communication details",
            "Monthly",
            "Monthly"
        ]
    ];


    // Now you can use the tableData array of objects in your application.

    return (
        <>
            <h2 className='adq-source ms-2 mt-3'>Data Vintage by Source and Data Area</h2>
            <div className='px-3 mt-4'>
                <table id="data-table-basic" class="table table-striped" ref={tableRef}>
                    <thead>
                        <tr>
                            <th>Load Date</th>
                            <th>Data Source</th>
                            <th>Data Area</th>
                            <th>Data Type</th>
                            <th>Ref Table Name</th>
                            <th>Target Table Name</th>
                            <th style={{ width: '10%' }}>Min Date Dataset</th>
                            <th>Max Date Dataset</th>
                            <th>Description</th>
                            <th>Expected Frequency</th>
                            <th>Curation Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((ele) => {
                                return (
                                    <tr>
                                        <td >{ele?.[0]}</td>
                                        <td >{ele?.[1]}</td>
                                        <td >{ele?.[2]}</td>
                                        <td >{ele?.[3]}</td>
                                        <td >{ele?.[4]}</td>
                                        <td >{ele?.[5]}</td>
                                        <td >{ele?.[6]}</td>
                                        <td >{ele?.[7]}</td>
                                        <td >{ele?.[8]}</td>
                                        <td >{ele?.[9]}</td>
                                        <td >{ele?.[10]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Load Date</th>
                            <th>Data Source</th>
                            <th>Data Area</th>
                            <th>Data Type</th>
                            <th>Ref Table Name</th>
                            <th>Target Table Name</th>
                            <th>Min Date Dataset</th>
                            <th>Max Date Dataset</th>
                            <th>Description</th>
                            <th>Expected Frequency</th>
                            <th>Curation Day</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    );
}

export default DataVintage;