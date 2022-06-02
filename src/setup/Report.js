import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './report.css';

const Report = () => {
    const {id} = useParams();
    const[Report,setReport] = useState([]);
    const [reportdescription, setReportDescription] = useState('');
    const [reportid, setReportID] = useState('');
    const [reportstatus, setReportStatus] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [userid,setUserID] = useState('');
    const [reply,setReply] = useState('');


   const getReport = async () =>{
     
        const reportResponse = await axios.get(`http://localhost:8080/ResQmeAdmin/getReports?reportID=${id}`);      
        const report = await reportResponse.data;
        setReportDescription(report[0].reportDescription);
        setReportID(report[0].reportID);
        setReportStatus(report[0].reportStatus);
        setUserEmail(report[0].userEmail);
        setUserID(report[0].userID);
        setReport(report);
        
    }

    useEffect(()=>{
        getReport();
        
    },[])
    
    const handleUpdate =  (()=>{
      const res =  axios.put('http://localhost:8080/ResQmeAdmin/updateReport',{
        reportDescription : reportdescription,
        reportID : reportid,
        reportStatus : reportstatus,
        userEmail : useremail,
        userID : userid
      });

      axios.post('http://localhost:8080/ResQmeAdmin/sendEmail',null,{ params: {
        email : useremail,  
        subject : 'Regarding your report with ID:' + reportid,
        body : reply + '\n \n \n \n \n Best Regards, ResQme Team'
      }});

      console.log(useremail);
      console.log(reportid);
      console.log(reply);
      alert('Updated Successfully');
    })
     return (
    <React.Fragment>
      <form className='form'>
      <div className='report'>
        <table className='table-report' width='190%'>
          <thead>
            <tr>
              <td>Report ID</td>
              <td className='modell'>Report Description</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{reportid}</td>
                <td>{reportdescription}</td>
                
              </tr>         
          </tbody>
          <thead>
            <tr>
              <td>User ID</td>
              <td>User Email</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{userid}</td>
                <td>{useremail}</td> 
              </tr> 
          </tbody>
          <thead>
            <tr>
              <td>Reply via Email</td>
              <td>Report Status</td>
            </tr>            
          </thead>
          <tbody>
            <tr>
              <td><input placeholder='Reply' type='text' onChange={(e) => setReply(e.target.value)}></input></td>
              <td><select name='status' onChange={(e) =>setReportStatus(e.target.value)}>
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

export default Report