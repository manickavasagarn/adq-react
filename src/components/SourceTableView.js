import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import '../css/Home.css';

function SourceTableView() {
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);
    useEffect(() => {
        if (tableRef.current && !dataTableRef.current) {
            // Only initialize the DataTable if it hasn't been initialized before
            console.log('Initializing DataTable...');
            const dataTableInstance = $(tableRef.current).DataTable({
                pageLength : 5,
                lengthChange: false,
                language: {
                    searchPlaceholder: "Search records",
                }
            });

            dataTableRef.current = dataTableInstance; // Store the DataTable instance
        }
    }, []);
    const tableData =[
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_CYCLE_PLAN_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_CYCLE_PLAN_VOD__C", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_PRODUCT_VOD__C", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_PRODUCT_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_PRODUCT_VOD__C", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_SENT_EMAIL", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_SENT_EMAIL_OPEN", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_SENT_EMAIL_OPEN", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_SENT_EMAIL_OPEN", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_SENT_EMAIL_OPEN", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Mandatory Fields Check", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Max Length Check", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_CYCLE_PLAN_VOD__C", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Relationship Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER", "Mandatory Fields Check", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER", "Relationship Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER_ROLE", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER_ROLE", "Mandatory Fields Check", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER_ROLE", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER_ROLE", "Relationship Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_USER_ROLE", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_CALL2_DETAIL_VOD__C", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ACCOUNT", "Mandatory Fields Check", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ACCOUNT", "Row Count Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Duplicate Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Null Validation", "pass", 0],
        ["Veeva", "08-23-2023 03:41:36", "VEEVA_CRM_ADDRESS_VOD__C", "Null Validation", "pass", 0]
    ]
    
    return (
        <div>
            <h3 className='adq-source'>Table View</h3>
            <table id="data-table-basic" class="table table-striped" ref={tableRef}>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Run At</th>
                        <th>Table Name</th>
                        <th>Test Name</th>
                        <th>Status</th>
                        <th>Discrepancy Count</th>
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
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                    <th>Source</th>
                        <th>Run At</th>
                        <th>Table Name</th>
                        <th>Test Name</th>
                        <th>Status</th>
                        <th>Discrepancy Count</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default SourceTableView