import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './cmc.css';

const Cmc = () => {

    const {id} = useParams();
    const[CMC,setCMC] = useState([]);
    const [cmcid, setCmcId] = useState('');
    const [cmcavailability, setCmcAvailability] = useState('');
    const [cmcbrand, setCmcBrand] = useState('');
    const [cmcimage, setCmcImage] = useState('');
    const [cmclocation, setCmcLocation] = useState('');
    const [cmcname, setCmcName] = useState('');
    const [cmcserviceproviderid,setCmcServiceProviderID] = useState('');
    const [cmcstatus, setCmcStatus] = useState('');

   const getCmc = async () =>{
        const cmcResponse = await axios.get(`http://localhost:8080/ResQmeAdmin/getCMCs?CmcID=${id}`);
        const cmc = await cmcResponse.data;
        setCmcId(cmc[0].cmcID);
        setCmcAvailability(cmc[0].cmcAvailability);
        setCmcBrand(cmc[0].cmcBrand);
        setCmcImage(cmc[0].cmcImage);
        setCmcLocation(cmc[0].cmcLocation);
        setCmcName(cmc[0].cmcName);
        setCmcServiceProviderID(cmc[0].cmcServiceProviderId);
        setCmcStatus(cmc[0].cmcStatus);
        setCMC(cmc);
        
    }

    useEffect(()=>{
        getCmc();
    },[])
    
    const handleUpdate =  (()=>{
      const res =  axios.put('http://localhost:8080/ResQmeAdmin/updateCMC',{
        cmcAvailability : cmcavailability,
        cmcBrand : cmcbrand,
        cmcID : cmcid,
        cmcImage : cmcimage,
        cmcLocation : cmclocation,
        cmcName : cmcname,
        cmcServiceProviderId : cmcserviceproviderid,
        cmcStatus : cmcstatus
      });

      alert('Updated Successfully');
    })
  return (
    <React.Fragment>
      <form className='form'>
      <div className='cmc'>
        <table className='table-cmc' width='190%'>
          <thead>
            <tr>
              <td>CMC ID</td>
              <td className='modell'>Cmc Brand</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{cmcid}</td>
                <td>{cmcbrand}</td>
                
              </tr>         
          </tbody>
          <thead>
            <tr>
              <td>CMC Name</td>
              <td>CMC Image</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{cmcname}</td>
                <img src={cmcimage}></img>
              </tr> 
          </tbody>
          <thead>
            <tr>
              <td>CMC Location</td>
              <td>CMC Availability</td>
            </tr>            
          </thead>
          <tbody>
            <tr>
              <td>{cmclocation}</td>
              <td>{cmcavailability}</td>
            </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Service Provider's ID</td>
              <td>CMC Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cmcserviceproviderid}</td>
              <td><select name='status' onChange={(e) =>setCmcStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
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
export default Cmc