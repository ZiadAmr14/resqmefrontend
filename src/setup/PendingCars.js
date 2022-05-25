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
import './pendingcars.css' 
import Logo from './logo1.png';
import axios from 'axios';
import { useEffect } from 'react';

const PendingCars = () => {

    const[Cars,setCars] = useState([]);
    const getCars = async () =>{
        const carResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getCars');
        const cars = await carResponse.data;
        setCars(cars);
        
    }

    useEffect(()=>{
        getCars();
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
          <h3 className='i-name'>Pending Cars</h3>
          <div className='cars'>
              <table width='100%'>
                  <thead>
                      <tr>
                          <td>Car Owner</td>
                          <td>Car Type</td>
                          <td>Car Model</td>
                          <td>Car Status</td>
                          <td></td>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          Cars.map((car)=>{
                              const{carID,carLicence,carMaintenance,carModel,carStatus,carTransmission,carType,userID} = car;
                              return (
                                  <tr key={carID}>
                                      <td>
                                          <h5>{userID}</h5>
                                      </td>
                                      <td>
                                          <h5>{carType}</h5>
                                      </td>
                                      <td>
                                          <h5>{carModel}</h5>
                                      </td>
                                      <td className='status'>
                                          <h5>{carStatus}</h5>
                                      </td>
                                      <td className='edit'>
                                          <Link to={`/pendingcars/${car.carID}`}>Edit</Link>
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

export default PendingCars