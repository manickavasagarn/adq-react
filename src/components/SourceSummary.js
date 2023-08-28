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
    width:"190px",
    height:"190px",
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
    {
      name: "Tiger Nixon",
      title: "System Architect",
      location: "Edinburgh",
      age: 61,
      date: "2011/04/25",
      salary: "$320,800",
      o: "o",
    },
    {
      name: "Garrett Winters",
      title: "Accountant",
      location: "Tokyo",
      age: 63,
      date: "2011/07/25",
      salary: "$170,750",
      o: "o",
    },
    {
      name: "Ashton Cox",
      title: "Junior Technical Author",
      location: "San Francisco",
      age: 66,
      date: "2009/01/12",
      salary: "$86,000",
      o: "o",
    },
    {
      name: "Cedric Kelly",
      title: "Senior Javascript Developer",
      location: "Edinburgh",
      age: 22,
      date: "2012/03/29",
      salary: "$433,060",
      o: "o",
    },
    {
      name: "Airi Satou",
      title: "Accountant",
      location: "Tokyo",
      age: 33,
      date: "2008/11/28",
      salary: "$162,700",
      o: "o",
    },
    {
      name: "Brielle Williamson",
      title: "Integration Specialist",
      location: "New York",
      age: 61,
      date: "2012/12/02",
      salary: "$372,000",
      o: "o",
    },
    {
      name: "Herrod Chandler",
      title: "Sales Assistant",
      location: "San Francisco",
      age: 59,
      date: "2012/08/06",
      salary: "$137,500",
      o: "o",
    },
    {
      name: "Rhona Davidson",
      title: "Integration Specialist",
      location: "Tokyo",
      age: 55,
      date: "2010/10/14",
      salary: "$327,900",
      o: "o",
    },
    {
      name: "Colleen Hurst",
      title: "Javascript Developer",
      location: "San Francisco",
      age: 39,
      date: "2009/09/15",
      salary: "$205,500",
      o: "o",
    },
    {
      name: "Sonya Frost",
      title: "Software Engineer",
      location: "Edinburgh",
      age: 23,
      date: "2008/12/13",
      salary: "$103,600",
      o: "o",
    },
    {
      name: "Jena Gaines",
      title: "Office Manager",
      location: "London",
      age: 30,
      date: "2008/12/19",
      salary: "$90,560",
      o: "o",
    },
    {
      name: "Quinn Flynn",
      title: "Support Lead",
      location: "Edinburgh",
      age: 22,
      date: "2013/03/03",
      salary: "$342,000",
      o: "o",
    },
    {
      name: "Charde Marshall",
      title: "Regional Director",
      location: "San Francisco",
      age: 36,
      date: "2008/10/16",
      salary: "$470,600",
      o: "o",
    },
    {
      name: "Haley Kennedy",
      title: "Senior Marketing Designer",
      location: "London",
      age: 43,
      date: "2012/12/18",
      salary: "$313,500",
      o: "o",
    },
    {
      name: "Tatyana Fitzpatrick",
      title: "Regional Director",
      location: "London",
      age: 19,
      date: "2010/03/17",
      salary: "$385,750",
      o: "1",
    },
    {
      name: "Michael Silva",
      title: "Marketing Designer",
      location: "London",
      age: 66,
      date: "2012/11/27",
      salary: "$198,500",
      o: "1",
    },
    {
      name: "Paul Byrd",
      title: "Chief Financial Officer (CFO)",
      location: "New York",
      age: 64,
      date: "2010/06/09",
      salary: "$725,000",
      o: "1",
    },
    {
      name: "Gloria Little",
      title: "Systems Administrator",
      location: "New York",
      age: 59,
      date: "2009/04/10",
      salary: "$237,500",
      o: "1",
    },
    {
      name: "Bradley Greer",
      title: "Software Engineer",
      location: "London",
      age: 41,
      date: "2012/10/13",
      salary: "$132,000",
      o: "1",
    },
    {
      name: "Dai Rios",
      title: "Personnel Lead",
      location: "Edinburgh",
      age: 35,
      date: "2012/09/26",
      salary: "$217,500",
      o: "1",
    },
    {
      name: "Jenette Caldwell",
      title: "Development Lead",
      location: "New York",
      age: 30,
      date: "2011/09/03",
      salary: "$345,000",
      o: "1",
    },
    {
      name: "Yuri Berry",
      title: "Chief Marketing Officer (CMO)",
      location: "New York",
      age: 40,
      date: "2009/06/25",
      salary: "$675,000",
      o: "1",
    },
    {
      name: "Caesar Vance",
      title: "Pre-Sales Support",
      location: "New York",
      age: 21,
      date: "2011/12/12",
      salary: "$106,450",
      o: "1",
    },
    {
      name: "Doris Wilder",
      title: "Sales Assistant",
      location: "Sidney",
      age: 23,
      date: "2010/09/20",
      salary: "$85,600",
      o: "1",
    },
    {
      name: "Angelica Ramos",
      title: "Chief Executive Officer (CEO)",
      location: "London",
      age: 47,
      date: "2009/10/09",
      salary: "$1,200,000",
      o: "1",
    },
    {
      name: "Gavin Joyce",
      title: "Developer",
      location: "Edinburgh",
      age: 42,
      date: "2010/12/22",
      salary: "$92,575",
      o: "1",
    },
    {
      name: "Jennifer Chang",
      title: "Regional Director",
      location: "Singapore",
      age: 28,
      date: "2010/11/14",
      salary: "$357,650",
      o: "1",
    },
    {
      name: "Brenden Wagner",
      title: "Software Engineer",
      location: "San Francisco",
      age: 28,
      date: "2011/06/07",
      salary: "$206,850",
      o: "1",
    },
    {
      name: "Fiona Green",
      title: "Chief Operating Officer (COO)",
      location: "San Francisco",
      age: 48,
      date: "2010/03/11",
      salary: "$850,000",
      o: "1",
    },
    {
      name: "Shou Itou",
      title: "Regional Marketing",
      location: "Tokyo",
      age: 20,
      date: "2011/08/14",
      salary: "$163,000",
      o: "1",
    },
    {
      name: "Michelle House",
      title: "Integration Specialist",
      location: "Sidney",
      age: 37,
      date: "2011/06/02",
      salary: "$95,400",
      o: "1",
    },
    {
      name: "Suki Burks",
      title: "Developer",
      location: "London",
      age: 53,
      date: "2009/10/22",
      salary: "$114,500",
      o: "1",
    },
    {
      name: "Prescott Bartlett",
      title: "Technical Author",
      location: "London",
      age: 27,
      date: "2011/05/07",
      salary: "$145,000",
      o: "1",
    },
    {
      name: "Gavin Cortez",
      title: "Team Leader",
      location: "San Francisco",
      age: 22,
      date: "2008/10/26",
      salary: "$235,500",
      o: "1",
    },
    {
      name: "Martena Mccray",
      title: "Post-Sales support",
      location: "Edinburgh",
      age: 46,
      date: "2011/03/09",
      salary: "$324,050",
      o: "1",
    },
    {
      name: "Unity Butler",
      title: "Marketing Designer",
      location: "San Francisco",
      age: 47,
      date: "2009/12/09",
      salary: "$85,675",
      o: "6",
    },
    {
      name: "Howard Hatfield",
      title: "Office Manager",
      location: "San Francisco",
      age: 51,
      date: "2008/12/16",
      salary: "$164,500",
      o: "6",
    },
    {
      name: "Hope Fuentes",
      title: "Secretary",
      location: "San Francisco",
      age: 41,
      date: "2010/02/12",
      salary: "$109,850",
      o: "6",
    },
    {
      name: "Vivian Harrell",
      title: "Financial Controller",
      location: "San Francisco",
      age: 62,
      date: "2009/02/14",
      salary: "$452,500",
      o: "6",
    },
    {
      name: "Timothy Mooney",
      title: "Office Manager",
      location: "London",
      age: 37,
      date: "2008/12/11",
      salary: "$136,200",
      o: "6",
    },
    {
      name: "Jackson Bradshaw",
      title: "Director",
      location: "New York",
      age: 65,
      date: "2008/09/26",
      salary: "$645,750",
      o: "6",
    },
    {
      name: "Olivia Liang",
      title: "Support Engineer",
      location: "Singapore",
      age: 64,
      date: "2011/02/03",
      salary: "$234,500",
      o: "6",
    },
    {
      name: "Bruno Nash",
      title: "Software Engineer",
      location: "London",
      age: 38,
      date: "2011/05/03",
      salary: "$163,500",
      o: "6",
    },
    {
      name: "Sakura Yamamoto",
      title: "Support Engineer",
      location: "Tokyo",
      age: 37,
      date: "2009/08/19",
      salary: "$139,575",
      o: "6",
    },
    {
      name: "Thor Walton",
      title: "Developer",
      location: "New York",
      age: 61,
      date: "2013/08/11",
      salary: "$98,540",
      o: "6",
    },
    {
      name: "Finn Camacho",
      title: "Support Engineer",
      location: "San Francisco",
      age: 47,
      date: "2009/07/07",
      salary: "$87,500",
      o: "6",
    },
    {
      name: "Serge Baldwin",
      title: "Data Coordinator",
      location: "Singapore",
      age: 64,
      date: "2012/04/09",
      salary: "$138,575",
      o: "6",
    },
    {
      name: "Zenaida Frank",
      title: "Software Engineer",
      location: "New York",
      age: 63,
      date: "2010/01/04",
      salary: "$125,250",
      o: "6",
    },
    {
      name: "Zorita Serrano",
      title: "Software Engineer",
      location: "San Francisco",
      age: 56,
      date: "2012/06/01",
      salary: "$115,000",
      o: "6",
    },
    {
      name: "Jennifer Acosta",
      title: "Junior Javascript Developer",
      location: "Edinburgh",
      age: 43,
      date: "2013/02/01",
      salary: "$75,650",
      o: "6",
    },
    {
      name: "Cara Stevens",
      title: "Sales Assistant",
      location: "New York",
      age: 46,
      date: "2011/12/06",
      salary: "$145,600",
      o: "6",
    },
    {
      name: "Hermione Butler",
      title: "Regional Director",
      location: "London",
      age: 47,
      date: "2011/03/21",
      salary: "$356,250",
      o: "6",
    },
    {
      name: "Lael Greer",
      title: "Systems Administrator",
      location: "London",
      age: 21,
      date: "2009/02/27",
      salary: "$103,500",
      o: "6",
    },
    {
      name: "Jonas Alexander",
      title: "Developer",
      location: "San Francisco",
      age: 30,
      date: "2010/07/14",
      salary: "$86,500",
      o: "6",
    },
    {
      name: "Shad Decker",
      title: "Regional Director",
      location: "Edinburgh",
      age: 51,
      date: "2008/11/13",
      salary: "$183,000",
      o: "6",
    },
    {
      name: "Michael Bruce",
      title: "Javascript Developer",
      location: "Singapore",
      age: 29,
      date: "2011/06/27",
      salary: "$183,000",
      o: "6",
    },
    {
      name: "Donna Snider",
      title: "Customer Support",
      location: "New York",
      age: 27,
      date: "2011/01/25",
      salary: "$112,000",
      o: "6",
    },
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
    labels: ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'],
    datasets: [
      {
        label: 'Pass',
        backgroundColor: '#5470c6',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [12, 19, 3, 5, 2],
        barThickness: 20,
      },
      {
        label: 'Fail',
        backgroundColor: '#ee6666',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [8, 15, 6, 10, 4],
        barThickness: 20,
      },
      {
        label: 'Warning',
        backgroundColor: '#fac858',
        borderColor: 'transparent',
        borderWidth: 2,
        data: [5, 12, 8, 6, 14],
        barThickness: 20,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'x', // Set the index axis to 'y' for vertical bars
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
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
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.name}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.title}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.location}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.age}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.date}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.salary}</td>
                  <td onClick={(e) => handleClick(e, ele)} variant="contained">{ele?.o}</td>
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
        style={{borderRadius:"5px"}}
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
        PaperProps={{ style: { width: "50%" } }}
      >
        <div role="presentation">
          <div className='p-5'>
            <Bar data={data} options={options} width={100} height={40} />
            <div className="mt-3"><SourceTableView ></SourceTableView></div>
          </div>
        </div>

      </SwipeableDrawer>
    </div>

  );
}

export default SourceSummary;