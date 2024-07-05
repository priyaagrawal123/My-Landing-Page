import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage'
import { Routes, Route } from 'react-router-dom';
import Secondpage from './components/Secondpage';
import Thirdpage from "./components/Thirdpage";
import Fourthpage from "./components/Fourthpage";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<div><Navbar /><Frontpage /><Secondpage /><Thirdpage /><Fourthpage /></div>} />
      <Route path="/secondpage" element={<Secondpage />} />
      <Route path="/thirdpage" element={<Thirdpage />} />
      <Route path="/fourthpage" element={<Fourthpage />} />
    </Routes>
  )
}

export default App
