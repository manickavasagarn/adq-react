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
      "DIM DRUG",
      "DAY-4",
      "2023-08-24 17:58:27",
      "08-24-2023 13:58:27",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-4",
      "2023-08-24 17:55:27",
      "08-24-2023 13:55:27",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-4",
      "2023-08-24 17:53:36",
      "08-24-2023 13:53:36",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-08-24 17:49:04",
      "08-24-2023 13:49:04",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-08-24 17:44:09",
      "08-24-2023 13:44:09",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-08-24 17:43:42",
      "08-24-2023 13:43:42",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-08-18 06:00:59",
      "08-18-2023 02:00:59",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-4",
      "2023-08-17 17:59:10",
      "08-17-2023 13:59:10",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-4",
      "2023-08-17 17:55:30",
      "08-17-2023 13:55:30",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-08-17 17:53:16",
      "08-17-2023 13:53:16",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-08-17 17:50:40",
      "08-17-2023 13:50:40",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-08-17 17:49:46",
      "08-17-2023 13:49:46",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA LAAD",
      "DAY-3",
      "2023-08-16 08:01:53",
      "08-16-2023 04:01:53",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "LAAD DIM HCP",
      "DAY-2",
      "2023-08-15 18:39:16",
      "08-15-2023 14:39:16",
      "MONTHLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-5",
      "2023-08-11 12:33:52",
      "08-11-2023 08:33:52",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-08-11 05:46:59",
      "08-11-2023 01:46:59",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-4",
      "2023-08-10 17:56:02",
      "08-10-2023 13:56:02",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-08-10 17:43:37",
      "08-10-2023 13:43:37",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-08-10 17:42:27",
      "08-10-2023 13:42:27",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-08-10 17:42:02",
      "08-10-2023 13:42:02",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "PAYER",
      "DAY-3",
      "2023-08-09 10:48:21",
      "08-09-2023 06:48:21",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "4",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-08-04 05:46:15",
      "08-04-2023 01:46:15",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-4",
      "2023-08-03 23:41:59",
      "08-03-2023 19:41:59",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "7",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-4",
      "2023-08-03 23:30:50",
      "08-03-2023 19:30:50",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-4",
      "2023-08-03 18:08:55",
      "08-03-2023 14:08:55",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-4",
      "2023-08-03 18:00:49",
      "08-03-2023 14:00:49",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-08-03 17:59:10",
      "08-03-2023 13:59:10",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-08-03 17:57:39",
      "08-03-2023 13:57:39",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-08-03 17:55:57",
      "08-03-2023 13:55:57",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-5",
      "2023-07-28 07:32:42",
      "07-28-2023 03:32:42",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-07-28 07:31:39",
      "07-28-2023 03:31:39",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-5",
      "2023-07-28 07:31:00",
      "07-28-2023 03:31:00",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-5",
      "2023-07-28 07:30:13",
      "07-28-2023 03:30:13",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-5",
      "2023-07-28 07:29:08",
      "07-28-2023 03:29:08",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-5",
      "2023-07-28 07:28:41",
      "07-28-2023 03:28:41",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-07-21 13:02:00",
      "07-21-2023 09:02:00",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-5",
      "2023-07-21 05:33:09",
      "07-21-2023 01:33:09",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-4",
      "2023-07-20 18:41:34",
      "07-20-2023 14:41:34",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-07-20 18:40:08",
      "07-20-2023 14:40:08",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-07-20 18:38:42",
      "07-20-2023 14:38:42",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-07-20 17:41:58",
      "07-20-2023 13:41:58",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA LAAD",
      "DAY-1",
      "2023-07-17 12:23:43",
      "07-17-2023 08:23:43",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "LAAD DIM HCP",
      "DAY-1",
      "2023-07-17 09:35:43",
      "07-17-2023 05:35:43",
      "MONTHLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-5",
      "2023-07-14 10:13:07",
      "07-14-2023 06:13:07",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-07-14 06:50:50",
      "07-14-2023 02:50:50",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-5",
      "2023-07-14 05:35:53",
      "07-14-2023 01:35:53",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-5",
      "2023-07-14 05:23:38",
      "07-14-2023 01:23:38",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-5",
      "2023-07-14 05:22:23",
      "07-14-2023 01:22:23",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-5",
      "2023-07-14 05:22:08",
      "07-14-2023 01:22:08",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "PAYER",
      "DAY-2",
      "2023-07-11 07:23:56",
      "07-11-2023 03:23:56",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "4",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-1",
      "2023-07-10 12:23:30",
      "07-10-2023 08:23:30",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "7",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-1",
      "2023-07-10 07:28:29",
      "07-10-2023 03:28:29",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "10",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-4",
      "2023-07-06 05:28:46",
      "07-06-2023 01:28:46",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-3",
      "2023-07-05 17:47:40",
      "07-05-2023 13:47:40",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-3",
      "2023-07-05 17:47:08",
      "07-05-2023 13:47:08",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-3",
      "2023-07-05 17:43:29",
      "07-05-2023 13:43:29",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-3",
      "2023-07-05 17:42:07",
      "07-05-2023 13:42:07",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-3",
      "2023-07-05 17:41:44",
      "07-05-2023 13:41:44",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-3",
      "2023-06-28 17:55:09",
      "06-28-2023 13:55:09",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-3",
      "2023-06-28 17:54:31",
      "06-28-2023 13:54:31",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-3",
      "2023-06-28 17:50:42",
      "06-28-2023 13:50:42",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-3",
      "2023-06-28 17:44:00",
      "06-28-2023 13:44:00",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-3",
      "2023-06-28 17:42:11",
      "06-28-2023 13:42:11",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA LAAD",
      "DAY-3",
      "2023-06-28 06:58:39",
      "06-28-2023 02:58:39",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "LAAD DIM HCP",
      "DAY-4",
      "2023-06-22 17:20:15",
      "06-22-2023 13:20:15",
      "MONTHLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-4",
      "2023-06-22 06:31:32",
      "06-22-2023 02:31:32",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-3",
      "2023-06-21 17:56:10",
      "06-21-2023 13:56:10",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-3",
      "2023-06-21 17:52:02",
      "06-21-2023 13:52:02",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-3",
      "2023-06-21 17:46:04",
      "06-21-2023 13:46:04",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-3",
      "2023-06-21 17:44:25",
      "06-21-2023 13:44:25",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-3",
      "2023-06-21 17:42:31",
      "06-21-2023 13:42:31",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA LAAD",
      "DAY-1",
      "2023-06-19 16:35:25",
      "06-19-2023 12:35:25",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-1",
      "2023-06-19 05:35:57",
      "06-19-2023 01:35:57",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-06-15 05:19:54",
      "06-15-2023 01:19:54",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "1",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-3",
      "2023-06-14 17:56:28",
      "06-14-2023 13:56:28",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-3",
      "2023-06-14 17:46:05",
      "06-14-2023 13:46:05",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-3",
      "2023-06-14 17:44:27",
      "06-14-2023 13:44:27",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "1",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-3",
      "2023-06-14 17:43:03",
      "06-14-2023 13:43:03",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-3",
      "2023-06-14 17:42:32",
      "06-14-2023 13:42:32",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-3",
      "2023-06-07 18:15:55",
      "06-07-2023 14:15:55",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-3",
      "2023-06-07 18:07:34",
      "06-07-2023 14:07:34",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-3",
      "2023-06-07 18:02:30",
      "06-07-2023 14:02:30",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "1",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-3",
      "2023-06-07 18:00:56",
      "06-07-2023 14:00:56",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-3",
      "2023-06-07 17:59:26",
      "06-07-2023 13:59:26",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-3",
      "2023-06-07 17:58:05",
      "06-07-2023 13:58:05",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "PAYER",
      "DAY-2",
      "2023-06-06 05:57:22",
      "06-06-2023 01:57:22",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "4",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-1",
      "2023-06-05 05:50:48",
      "06-05-2023 01:50:48",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "7",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-1",
      "2023-06-05 04:59:03",
      "06-05-2023 00:59:03",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "MMIT",
      "DAY-5",
      "2023-06-02 05:45:11",
      "06-02-2023 01:45:11",
      "MONTHLY",
      "UNHEALTHY",
      "True",
      "3",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-4",
      "2023-06-01 07:54:36",
      "06-01-2023 03:54:36",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-4",
      "2023-06-01 06:54:00",
      "06-01-2023 02:54:00",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-4",
      "2023-06-01 06:53:13",
      "06-01-2023 02:53:13",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-4",
      "2023-06-01 06:41:05",
      "06-01-2023 02:41:05",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-4",
      "2023-06-01 06:37:42",
      "06-01-2023 02:37:42",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "1",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-4",
      "2023-06-01 06:37:03",
      "06-01-2023 02:37:03",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "LAAD DIM HCP",
      "DAY-2",
      "2023-05-30 13:35:20",
      "05-30-2023 09:35:20",
      "MONTHLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA LAAD",
      "DAY-2",
      "2023-05-30 13:22:57",
      "05-30-2023 09:22:57",
      "MONTHLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "DIM DRUG",
      "DAY-5",
      "2023-05-26 07:03:32",
      "05-26-2023 03:03:32",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "ROSTER",
      "DAY-5",
      "2023-05-26 05:28:18",
      "05-26-2023 01:28:18",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "TERR ALIGNMENT",
      "DAY-5",
      "2023-05-26 05:26:43",
      "05-26-2023 01:26:43",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "IQVIA XPT",
      "DAY-5",
      "2023-05-26 05:19:29",
      "05-26-2023 01:19:29",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
      "False",
      "0"
    ],
    [
      "HCP ALIGNMENT",
      "DAY-5",
      "2023-05-26 05:15:07",
      "05-26-2023 01:15:07",
      "WEEKLY",
      "UNHEALTHY",
      "True",
      "1",
      "False",
      "0"
    ],
    [
      "DIM HCP",
      "DAY-5",
      "2023-05-26 05:14:31",
      "05-26-2023 01:14:31",
      "WEEKLY",
      "HEALTHY",
      "False",
      "0",
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