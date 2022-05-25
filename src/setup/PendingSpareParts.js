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
import './pendingspareparts.css' 
import Logo from './logo1.png';
import axios from 'axios';
import { useEffect } from 'react';
const PendingSpareParts = () => {

    const[SpareParts,setSpareParts] = useState([]);
    const getSpareParts = async () =>{
        const SparePartsResponse = await axios.get('http://localhost:8080/ResQmeAdmin/getSpareParts');
        const SpareParts = await SparePartsResponse.data;
        setSpareParts(SpareParts);
    }

    useEffect(()=>{
        getSpareParts();
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
          <h3 className='i-name'>Pending Spare Parts</h3>
          <div className='spareparts'>
              <table width='100%'>
                  <thead>
                      <tr>
                          <td>Item Name</td>
                          <td>Item Cost</td>
                          <td>Item's Corresponding Brand</td>
                          <td>Item Status</td>
                          <td></td>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          SpareParts.map((sparepart)=>{
                              const{itemAvailability,itemCarType,itemID,itemImage,itemName,itemNewOrUsed,itemPrice,itemServiceProviderId,itemStatus} = sparepart;
                              return (
                                  <tr key={itemID}>
                                      <td>
                                          <img src={itemImage} alt=''/>
                                          <h5>{itemName}</h5>
                                      </td>
                                      <td>
                                          <h5>{itemPrice}</h5>
                                      </td>
                                      <td>
                                          <h5>{itemCarType}</h5>
                                      </td>
                                      <td className='status'>
                                          <h5>{itemStatus}</h5>
                                      </td>
                                      <td className='edit'>
                                          <Link to={`/pendingspareparts/${sparepart.itemID}`}>Edit</Link>
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

export default PendingSpareParts