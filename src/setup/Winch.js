import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './winch.css';

const Winch = () => {
    const {id} = useParams();
    const[Winch,setWinch] = useState([]);
    const [driverlicence, setDriverLicence] = useState('');
    const [winchaddress, setWinchAddress] = useState('');
    const [winchavailability, setWinchAvailability] = useState('');
    const [winchcostperkm, setWinchCostPerKM] = useState('');
    const [winchcurrentlat,setWinchCurrentLat] = useState('');
    const [winchcurrentlong,setWinchCurrentLong] = useState('');
    const [winchid, setWinchID] = useState('');
    const [winchlicence, setWinchLicence] = useState('');
    const [winchname, setWinchName] = useState('');
    const [winchownerid,setWinchOwnerID] = useState('');
    const [winchownerrate, setWinchOwnerRate] = useState('');
    const [winchstatus, setWinchStatus] = useState('');


   const getWinch = async () =>{
        const winchResponse = await axios.get(`http://localhost:8080/ResQmeAdmin/getWinches?winchID=${id}`);
        const winch = await winchResponse.data;
        setDriverLicence(winch[0].driverLicence);
        setWinchAddress(winch[0].winchAddress);
        setWinchAvailability(winch[0].winchAvailability);
        setWinchCostPerKM(winch[0].winchCostPerKM);
        setWinchCurrentLat(winch[0].winchCurrentLat);
        setWinchCurrentLong(winch[0].winchCurrentLong);
        setWinchID(winch[0].winchID);
        setWinchLicence(winch[0].winchLicence);
        setWinchName(winch[0].winchName);
        setWinchOwnerID(winch[0].winchOwnerID);
        setWinchOwnerRate(winch[0].winchOwnerRate);
        setWinchStatus(winch[0].winchStatus);
        setWinch(winch);
        
    }

    useEffect(()=>{
        getWinch();
        
    },[])
    
    const handleUpdate =  (()=>{
      const res =  axios.put('http://localhost:8080/ResQmeAdmin/updateWinch',{
        driverLicence : driverlicence,
        winchAddress : winchaddress,
        WinchAddress : winchaddress,
        winchAvailability : winchavailability,
        winchCostPerKM : winchcostperkm,
        winchCurrentLat : winchcurrentlat,
        winchCurrentLong : winchcurrentlong,
        winchID : winchid,
        winchLicence : winchlicence,
        winchName : winchname,
        winchOwnerID : winchownerid,
        winchOwnerRate : winchownerrate,
        winchStatus : winchstatus
      });

      
      alert('Updated Successfully');
    })
     return (
    <React.Fragment>
      <form className='form'>
      <div className='winch'>
        <table className='table-winch' width='190%'>
          <thead>
            <tr>
              <td>Winch ID</td>
              <td className='modell'>Winch Name</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{winchid}</td>
                <td>{winchname}</td>
                
              </tr>         
          </tbody>
          <thead>
            <tr>
              <td>Winch's Owner ID</td>
              <td>Winch Rate</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{winchownerid}</td>
                <td>{winchownerrate}</td> 
              </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Driver License </td>
              <td>Winch License</td>
            </tr>            
          </thead>
          <tbody>
            <tr>
              <td><img src={driverlicence}></img></td>
              <td><img src={winchlicence}></img></td>
            </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Winch Cost Per KM</td>
              <td>Winch Availability</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{winchcostperkm}</td>
              <td>{winchavailability}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Winch Address</td>
              <td>Winch Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{winchaddress}</td>
              <td><select name='status' onChange={(e) =>setWinchStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Refused">Refused</option>
              </select></td>
            </tr>
          </tbody>
        </table>
       
      </div>
       <button className='button-18'><Link className='edit' to='/' onClick={handleUpdate}>Update</Link></button>
      
      </form>
    </React.Fragment>
  )
}

export default Winch