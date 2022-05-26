import { render } from '@testing-library/react';
import React from 'react';
// react router
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Login from './Login';
import Overview from './Overview.js';
import PendingCars from './PendingCars.js';
import PendingCMCs from './PendingCMCs';
import PendingTowingCars from './PendingTowingCars.js';
import PendingSpareParts from './PendingSpareParts';
import PendingReports from './PendingReports';
import Car from './Car';
import Cmc from './Cmc';
import Winch from './Winch';
import SparePart from './SparePart';
import Report from './Report';
const ReactRouterSetup = () => {
  return( 
    <Routes>
      <Route exact path="/" element={<Overview/>}/>
      <Route path="/pendingcars" element={<PendingCars/>}/>
      <Route path='/pendingcmcs' element={<PendingCMCs/>}/>
      <Route path='/pendingtowingcars' element={<PendingTowingCars/>}/>
      <Route path='/pendingspareparts' element={<PendingSpareParts/>}/>
      <Route path='/pendingreports' element={<PendingReports/>}/>
      <Route path='/pendingcars/:id' element={<Car/>}/>
      <Route path='/pendingcmcs/:id' element={<Cmc/>}/>
      <Route path='/pendingtowingcars/:id' element={<Winch/>}/>
      <Route path='/pendingspareparts/:id' element={<SparePart/>}/>
      <Route path='/pendingreports/:id' element={<Report/>}/>

    </Routes>
    
  )};

export default ReactRouterSetup;
