import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './setup/Login';
import Overview from './setup/Overview';
import Setup from './setup'
function App() {
  return (
    <BrowserRouter>
      <Setup/>
    </BrowserRouter>
  );
}

export default App;
