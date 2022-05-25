import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './car.css';



const Car = () => {

    const {id} = useParams();
    const[Car,setCar] = useState([]);
    const [carid, setCarId] = useState('');
    const [carmodel, setCarModel] = useState('');
    const [carmaintenance, setCarMaintenance] = useState('');
    const [cartrasmission, setCarTransmission] = useState('');
    const [cartype, setCarType] = useState('');
    const [carlicence, setCarLicence] = useState('');
    const [cardriverlicence,setDriverLicence] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [carstatus, setCarStatus] = useState('');

   const getCar = async () =>{
        const carResponse = await axios.get(`http://localhost:8080/ResQmeAdmin/getCars?carID=${id}`);
        const car = await carResponse.data;
        setCarId(car[0].carID);
        setCarModel(car[0].carModel);
        setCarMaintenance(car[0].carMaintenance);
        setCarTransmission(car[0].carTransmission);
        setCarType(car[0].carType);
        setCarLicence(car[0].carLicence);
        setDriverLicence(car[0].carDriverLicence);
        setOwnerID(car[0].userID);
        setCarStatus(car[0].carStatus);
        setCar(car);
        
    }

    useEffect(()=>{
        getCar();
    },[])
    
    const handleUpdate =  (()=>{
      const res =  axios.put('http://localhost:8080/ResQmeAdmin/updateCar',{
        carDriverLicence : cardriverlicence,
        carID : carid,
        carLicence : carlicence,
        carMaintenance : carmaintenance,
        carModel : carmodel,
        carStatus : carstatus,
        carTransmission : cartrasmission,
        carType :cartype,
        userID : ownerID
      });

      alert('Updated Successfully');
    })
  return (
    <React.Fragment>
      <form className='form'>
      <div className='car'>
        <table className='table-car' width='190%'>
          <thead>
            <tr>
              <td>Car ID</td>
              <td className='modell'>Car Model</td>
              <td>Car Maintenance</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{carid}</td>
                <td>{carmodel}</td>
                <td>{carmaintenance}</td>
              </tr>         
          </tbody>
          <thead>
            <tr>
              <td>Car Transmission</td>
              <td>Car Type</td>
              <td>Car Licence</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{cartrasmission}</td>
                <td>{cartype}</td>
                <img src={carlicence}></img>
              </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Owner's ID</td>
              <td>Car Driver Licence</td>
              <td>Car Status</td>
             
            </tr>            
          </thead>
          <tbody>
            <tr>
              <td>{ownerID}</td>
              <td><img src={cardriverlicence}/></td>
              <td><select name='status' onChange={(e) =>setCarStatus(e.target.value)}>
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

export default Car