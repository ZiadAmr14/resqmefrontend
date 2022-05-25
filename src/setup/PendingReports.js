import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReportIcon from '@mui/icons-material/Report';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './pendingreports.css' 
import Logo from './logo1.png';
import axios from 'axios';
import { useEffect } from 'react';

const PendingReports = () => {

    const[Reports,setReports] = useState([]);
    const getReports = async () =>{
        const ReportsResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getReports');
        const Reports = await ReportsResponse.data;
        setReports(Reports);
    }

    useEffect(()=>{
        getReports();
    },[])

    return (
        <React.Fragment>
        <section id="menu">
          <div className='logo'>
          <img src={Logo}/>
          <h2 style={{marginLeft:'10px'}}>ResQme</h2> 
          </div>
          <div className='items'>
            <li>
              <i><PieChartIcon/></i>
              <Link to={"/"}>Overview</Link>
            </li>
            <li>
               <i><TimeToLeaveIcon/></i>
               <Link to={"/pendingcars"}>Pending Cars</Link>
            </li>
            <li>
              <i><EngineeringIcon/></i>
               <Link to={"/pendingcmcs"}>Pending CMCs</Link>
            </li>
            <li>
               <i><RvHookupIcon/></i>
               <Link to={"/pendingtowingcars"}>Pending Towing Cars</Link>
            </li>
            <li>
               <i><AddShoppingCartIcon/></i>
               <Link to={"/pendingspareparts"}>Pending Spare Parts</Link>
            </li>
            <li>
               <i><ReportIcon/></i>
               <Link to={"/pendingreports"}>Pending Reports</Link>
            </li>
          </div>
        </section>

        <section id='interface' className='topright'>
          <div className='navigation'>
            <div className='n1'>
              <div className='search'>
              </div>
            </div>
            <div>
            </div>
            <div className='profile'>
              <NotificationsNoneIcon/>
              <PersonIcon/>
            </div>
          </div>
          <h3 className='i-name'>Pending Reports</h3>
          <div className='reports'>
              <table width='100%'>
                  <thead>
                      <tr>
                          <td>User Email</td>
                          <td>Report Description</td>
                          <td>Item Status</td>
                          <td></td>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          Reports.map((report)=>{
                              const{reportDescription,reportID,reportStatus,userEmail,userID} = report;
                              return (
                                  <tr key={reportID}>
                                      <td>
                                          <h5>{userEmail}</h5>
                                      </td>
                                      <td>
                                          <h5>{reportDescription}</h5>
                                      </td>
                                      <td className='status'>
                                          <h5>{reportStatus}</h5>
                                      </td>
                                      <td className='edit'>
                                          <Link to={`/pendingreports/${report.reportID}`}>Edit</Link>
                                      </td>
                                  </tr>
                              )
                          })
                      }
                  </tbody>

              </table>

          </div>
          

        </section>
    </React.Fragment>
    )
}

export default PendingReports