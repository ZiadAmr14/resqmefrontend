import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './sparepart.css';

const SparePart = () => {
    const {id} = useParams();
    const[SparePart,setSparePart] = useState([]);
    const [itemavailability, setItemAvailability] = useState('');
    const [itemcartype, setItemCarType] = useState('');
    const [itemid, setItemID] = useState('');
    const [itemimage, setItemImage] = useState('');
    const [itemname, setItemName] = useState('');
    const [itemneworused, setItemNewOrUsed] = useState('');
    const [itemprice,setItemPrice] = useState('');
    const [itemserviceproviderid, setItemServiceProviderID] = useState('');
    const [itemstatus, setItemStatus] = useState('');

   const getItem = async () =>{
        const itemResponse = await axios.get(`http://localhost:8080/ResQmeAdmin/getSpareParts?sparePartID=${id}`);
        const item = await itemResponse.data;
        setItemAvailability(item[0].itemAvailability);
        setItemCarType(item[0].itemCarType);
        setItemID(item[0].itemID);
        setItemImage(item[0].itemImage);
        setItemName(item[0].itemName);
        setItemNewOrUsed(item[0].itemNewOrUsed);
        setItemPrice(item[0].itemPrice);
        setItemServiceProviderID(item[0].itemServiceProviderId);
        setItemStatus(item[0].itemStatus);
        setSparePart(item);
        
    }

    useEffect(()=>{
        getItem();
    },[])
    
    const handleUpdate =  (()=>{
      const res =  axios.put('http://localhost:8080/ResQmeAdmin/updateSparePart',{
        itemAvailability : itemavailability,
        itemCarType : itemcartype,
        itemID : itemid,
        itemImage : itemimage,
        itemName : itemname,
        itemNewOrUsed : itemneworused,
        itemPrice : itemprice,
        itemServiceProviderId :itemserviceproviderid,
        itemStatus : itemstatus
      });

      alert('Updated Successfully');
    })
  return (
    <React.Fragment>
      <form className='form'>
      <div className='item'>
        <table className='table-item' width='190%'>
          <thead>
            <tr>
              <td>Item ID</td>
              <td className='modell'>Item Name</td>
              <td>Item's Car Type</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{itemid}</td>
                <td>{itemname}</td>
                <td>{itemcartype}</td>
              </tr>         
          </tbody>
          <thead>
            <tr>
              <td>Item Price</td>
              <td>Item New Or Used</td>
              <td>Item Image</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{itemprice}</td>
                <td>{itemneworused}</td>
                <img src={itemimage}></img>
              </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Item's Availability</td>
              <td>Item's Service Provider ID</td>
              <td>Item Status</td>
             
            </tr>            
          </thead>
          <tbody>
            <tr>
              <td>{itemavailability}</td>
              <td>{itemserviceproviderid}</td>
              <td><select name='status' onChange={(e) =>setItemStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Refused">Refuced</option>
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

export default SparePart