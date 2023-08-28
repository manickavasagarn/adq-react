import React, { useState } from 'react'
import '../css/NavBar.css';
import '../css/animate.css';
import logo from '../images/DataAces_logo.png'
import Home from './Home';
import { useEffect } from 'react';

function NavBar() {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const [tabContent, setTabContent] = useState(<Home></Home>);
    const toggle = (tab) => {
        if (currentActiveTab !== tab) {
            setCurrentActiveTab(tab);
        }
    }

    const onItemClick = (e) => {
        console.log(e)
    };
    useEffect(() => {
        switch (currentActiveTab) {
            case '1':
                setTabContent(<Home></Home>);
                break;
            // Add other cases here
            default:
                setTabContent(null)
        }
    }, [currentActiveTab])


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top adq-nav">
                <div className='row w-100'>
                    <div className='col-3'>
                        <div className='d-flex'>
                            <img src={logo} width="55" height="auto" className='ms-5'></img>
                            <p className='adq-name my-auto'>&nbsp; Ace Data Quality</p>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a className={`nav-link ${currentActiveTab === '1' ? 'active' : ''}`} onClick={() => { toggle('1'); }} ><i class="fa-solid fa-house"></i>&nbsp;Home</a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${currentActiveTab === '2' ? 'active' : ''}`} onClick={() => { toggle('2'); }} ><i class="fa-solid fa-clock-rotate-left"></i>&nbsp;Data Reliability History</a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${currentActiveTab === '3' ? 'active' : ''}`} onClick={() => { toggle('3'); }} ><i class="fa-solid fa-triangle-exclamation"></i>&nbsp;Incident</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a className={`nav-link dropdown-toggle ${currentActiveTab === '4' ? 'active' : ''}`} role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                                        <i class="fa-solid fa-viruses"></i>&nbsp; Rules
                                    </a>
                                    <ul class="dropdown-menu animated zoomIn" >
                                        <li><a class="dropdown-item" onClick={ onItemClick } >Table Rules</a></li>
                                        <li><a class="dropdown-item" >Metric Rules</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a className={`nav-link dropdown-toggle ${currentActiveTab === '5' ? 'active' : ''}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-bars"></i>&nbsp;Dashboard
                                    </a>
                                    <ul class="dropdown-menu animated zoomIn">
                                        <li><a class="dropdown-item" >Table  Dashboard</a></li>
                                        <li><a class="dropdown-item" >Metric  Dashboard</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-2'>
                        <ul class="navbar-nav  me-3">
                            <li class="nav-item dropdown ms-auto">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-end animated zoomIn" aria-labelledby="navbarDropdown">
                                    <p className='d-flex justify-content-center fw-bold'>Demo User</p>
                                    <a class="dropdown-item" >Profile</a>
                                    <a class="dropdown-item" >Settings</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" >Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {
                tabContent
            }




        </>
    )
}

export default NavBar