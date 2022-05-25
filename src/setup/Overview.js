import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReportIcon from '@mui/icons-material/Report';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './overview.css' 
import Logo from './logo1.png';
import axios from 'axios';
import { useEffect } from 'react';



const Overview = () => {

  const[Cars,setCars] = useState([]); 
  const[TowingCars,setTowingCars] = useState([]);
  const[CMCS,setCMCS] = useState([]);
  const[SpareParts,setSpareParts] = useState([]);

  const getData = async() =>{
    const carResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getCars');
    const winchResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getWinches');
    const cmcResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getCMCs');
    const sparePartsResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getSpareParts');
    const cars = await carResponse.data;
    const winches = await winchResponse.data
    const cmcs = await cmcResponse.data;
    const spareParts = await sparePartsResponse.data;
    setCars(cars);
    setTowingCars(winches);
    setCMCS(cmcs);
    setSpareParts(spareParts);
  }

  useEffect(()=>{
    getData();
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

          <h3 className='i-name'>Overview</h3>
          <div className='values'>
            <div className='val-box'>
              <i><TimeToLeaveIcon/></i>
              <div>
                <h3>{Cars.length}</h3>
                <span>Pending Customer Cars</span>
              </div>
            </div>
            <div className='val-box'>
              <i><EngineeringIcon/></i>
              <div>
                <h3>{CMCS.length}</h3>
                <span>Pending  Centers</span>
              </div>
            </div>
            <div className='val-box'>
              <i><RvHookupIcon /></i>
              <div>
                <h3>{TowingCars.length}</h3>
                <span>Pending Towing Cars</span>
              </div>
            </div>
            <div className='val-box'>
              <i><AddShoppingCartIcon/></i>
              <div>
                <h3>{SpareParts.length}</h3>
                <span>Pending Spare Parts</span>
              </div>
            </div>
          </div>

        </section>
    </React.Fragment>
  )
}

export default Overview