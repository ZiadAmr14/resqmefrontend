import React, { useEffect } from 'react'
import { useState } from 'react'

import './login.css' 

const Login = () => {

    
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[valid,setValid] = useState(false);

    const handleCredentials = (e) => {
        e.preventDefault();
        if(userName && password)
        {
            const uname = userName;
            const uPass = password;
            if(uname === 'Ziad Amr' && uPass === '123'){
                window.location.href("/Overview");
             
            }
            else
                alert('wrong credentials');
        }

    }
  return (
      <React.Fragment>
          <div className="center">
            <h1>ResQme Admin Panel</h1>
            <form method="post" onSubmit={handleCredentials}>
                <div className="txt_field">
                <input type="text" required id='userName' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                <span></span>
                <label>Username</label>
                </div>
                <div className="txt_field">
                <input type="password" required id='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <span></span>
                <label>Password</label>
                </div>
                <button type="submit">Login</button>
                <br></br><br></br><br></br><br></br>
            </form>
        </div>

      
   </React.Fragment>
  )
}

export default Login