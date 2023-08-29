import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import '../css/Home.css';
import { Button, SwipeableDrawer } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import SourceTableView from './SourceTableView';
function SourceSummary() {
  const tableRef = useRef(null);
  const dataTableRef = useRef(null); // Store a reference to the DataTable instance

  var popoverStyle = {
    border: " 0px solid rgba(0, 0, 0, .2)",
    borderRadius: "2px",
    fontFamily: "Roboto,sans-serif",
    boxShadow: " 0 2px 10px rgba(0, 0, 0, .2)",
    padding: "5px 15px 10px 15px",
    lineHeight: " 24px",
    fontSize: "14px",
    width: "190px",
    height: "190px",
  }
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
      if (dataTableRef.current) {
        dataTableRef.current.order([2, 'asc']).draw();
    }
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverData, setPopoverData] = useState([]);
  const handleClick = (event, data) => {
    setAnchorEl(event.currentTarget);
    setPopoverData(data)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tableData = [
    [
      "ConcertAI",
      "DAY-1",
      "2023-08-28 14:50:05",
      "08-28-2023 10:50:05",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-1",
      "2023-08-28 14:33:01",
      "08-28-2023 10:33:01",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-1",
      "2023-08-28 10:38:37",
      "08-28-2023 06:38:37",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-1",
      "2023-08-28 07:39:09",
      "08-28-2023 03:39:09",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-7",
      "2023-08-27 14:35:02",
      "08-27-2023 10:35:02",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-7",
      "2023-08-27 09:12:35",
      "08-27-2023 05:12:35",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-7",
      "2023-08-27 07:41:44",
      "08-27-2023 03:41:44",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-6",
      "2023-08-26 14:35:19",
      "08-26-2023 10:35:19",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-6",
      "2023-08-26 09:22:56",
      "08-26-2023 05:22:56",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-6",
      "2023-08-26 07:43:29",
      "08-26-2023 03:43:29",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Custom NBRxW",
      "DAY-5",
      "2023-08-25 19:45:41",
      "08-25-2023 15:45:41",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA SOBW",
      "DAY-5",
      "2023-08-25 19:35:28",
      "08-25-2023 15:35:28",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-5",
      "2023-08-25 14:32:56",
      "08-25-2023 10:32:56",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-5",
      "2023-08-25 09:18:16",
      "08-25-2023 05:18:16",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-5",
      "2023-08-25 07:40:09",
      "08-25-2023 03:40:09",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "ConcertAI",
      "DAY-5",
      "2023-08-25 06:03:47",
      "08-25-2023 02:03:47",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-4",
      "2023-08-24 14:33:03",
      "08-24-2023 10:33:03",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-4",
      "2023-08-24 09:35:47",
      "08-24-2023 05:35:47",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-4",
      "2023-08-24 07:53:17",
      "08-24-2023 03:53:17",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "ConcertAI",
      "DAY-4",
      "2023-08-24 05:41:19",
      "08-24-2023 01:41:19",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Plantrak - ADW",
      "DAY-3",
      "2023-08-23 14:38:55",
      "08-23-2023 10:38:55",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "2"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-3",
      "2023-08-23 14:33:05",
      "08-23-2023 10:33:05",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-3",
      "2023-08-23 09:15:14",
      "08-23-2023 05:15:14",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-3",
      "2023-08-23 07:41:36",
      "08-23-2023 03:41:36",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ]
    ,
    [
      "ConcertAI",
      "DAY-1",
      "2023-08-28 14:50:05",
      "08-28-2023 10:50:05",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-1",
      "2023-08-28 14:33:01",
      "08-28-2023 10:33:01",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-1",
      "2023-08-28 10:38:37",
      "08-28-2023 06:38:37",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-1",
      "2023-08-28 07:39:09",
      "08-28-2023 03:39:09",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-7",
      "2023-08-27 14:35:02",
      "08-27-2023 10:35:02",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-7",
      "2023-08-27 09:12:35",
      "08-27-2023 05:12:35",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-7",
      "2023-08-27 07:41:44",
      "08-27-2023 03:41:44",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-6",
      "2023-08-26 14:35:19",
      "08-26-2023 10:35:19",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-6",
      "2023-08-26 09:22:56",
      "08-26-2023 05:22:56",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-6",
      "2023-08-26 07:43:29",
      "08-26-2023 03:43:29",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Custom NBRxW",
      "DAY-5",
      "2023-08-25 19:45:41",
      "08-25-2023 15:45:41",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA SOBW",
      "DAY-5",
      "2023-08-25 19:35:28",
      "08-25-2023 15:35:28",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-5",
      "2023-08-25 14:32:56",
      "08-25-2023 10:32:56",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-5",
      "2023-08-25 09:18:16",
      "08-25-2023 05:18:16",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-5",
      "2023-08-25 07:40:09",
      "08-25-2023 03:40:09",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "ConcertAI",
      "DAY-5",
      "2023-08-25 06:03:47",
      "08-25-2023 02:03:47",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-4",
      "2023-08-24 14:33:03",
      "08-24-2023 10:33:03",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-4",
      "2023-08-24 09:35:47",
      "08-24-2023 05:35:47",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-4",
      "2023-08-24 07:53:17",
      "08-24-2023 03:53:17",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "ConcertAI",
      "DAY-4",
      "2023-08-24 05:41:19",
      "08-24-2023 01:41:19",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "IQVIA Plantrak - ADW",
      "DAY-3",
      "2023-08-23 14:38:55",
      "08-23-2023 10:38:55",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "2"
    ],
    [
      "IQVIA Valuetrak",
      "DAY-3",
      "2023-08-23 14:33:05",
      "08-23-2023 10:33:05",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Cardinal 3PL",
      "DAY-3",
      "2023-08-23 09:15:14",
      "08-23-2023 05:15:14",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ],
    [
      "Veeva",
      "DAY-3",
      "2023-08-23 07:41:36",
      "08-23-2023 03:41:36",
      "DAILY",
      "HEALTHY",
      "False",
      "0"
    ]

  ];


  // Now you can use the tableData array of objects in your application.


  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setAnchorEl(null)
    setIsOpen(open);
  };

  const data = {
    labels: ['CARDINAL_REPORT_INVENTORY', 'VEEVA_CRM_TIME_OFF_TERRITORY_VOD__C', 'VEEVA_CRM_CYCLE_PLAN_VOD__C', 'VEEVA_CRM_USER', 'VEEVA_CRM_ACCOUNT'],
    datasets: [
      {
        label: 'Pass',
        backgroundColor: '#5470c6',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [12, 19, 3, 5, 2],
        barThickness: 10,
      },
      {
        label: 'Fail',
        backgroundColor: '#ee6666',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [8, 15, 6, 10, 4],
        barThickness: 10,
      },
      {
        label: 'Warning',
        backgroundColor: '#fac858',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [5, 12, 8, 6, 14],
        barThickness: 10,
      }],
  }

  // Chart options
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
  return (
    <div className='px-3 mt-4'>
      <table id="data-table-basic" class="table table-striped" ref={tableRef}>
        <thead>
          <tr>
            <th>Source</th>
            <th>Run Day</th>
            <th>Run At</th>
            <th>Frequency</th>
            <th>Status</th>
            <th>Source Fail</th>
            <th>Source Failed Count</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData?.map((ele) => {
              return (
                <tr>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[0]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[1]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[2]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[3]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[4]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[5]}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.[6]}</td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <th>Source</th>
            <th>Run Day</th>
            <th>Run At</th>
            <th>Frequency</th>
            <th>Status</th>
            <th>Source Fail</th>
            <th>Source Failed Count</th>
          </tr>
        </tfoot>
      </table>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center', // Center vertically
          horizontal: 'right', // Align to the right side
        }}
        transformOrigin={{
          vertical: 'center', // Center vertically
          horizontal: 'left', // Align to the left side
        }}
        style={{ borderRadius: "5px" }}
      >
        <Typography style={popoverStyle} >
          <div>
            <p className='popoverP'> Total Pass : <b>2</b> </p>
            <p className='popoverP'> Total Fail : <b>3</b> </p>
            <p className='popoverP'> Total Warnings : <b>7</b> </p>
            <p className='popoverP'> Total Tables : <b>2</b> </p>
            <p className='popoverP'> Affected Tables : <b>1</b> </p>
            <p className='popoverP'> Run Time : <b>25 min</b> </p>
            <p className='popoverMore' onClick={toggleDrawer(true)}>More Details</p>
          </div>
        </Typography>
      </Popover>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{ style: { width: "55%" } }}
        transitionDuration={1000}
      >
        <div role="presentation">
          <div className='p-5'>
            <p className='adq-source'>Source Summary Dashboard</p>
            <Bar data={data} options={options} width={100} height={40} />
            <div className="mt-3"><SourceTableView ></SourceTableView></div>
          </div>
        </div>

      </SwipeableDrawer>
    </div>

  );
}

export default SourceSummary;