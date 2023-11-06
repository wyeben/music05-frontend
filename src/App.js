import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListSongComponent from './components/listSongComponent';
import HeaderComponent from './components/headerComponent'; 
import FooterComponent from './components/footerComponent'; 
import UploadSongComponent from './components/UploadSongComponent';
import FlippingButton from './components/FlippingButton';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className='main'>
      <FlippingButton />
      <BrowserRouter>
        <div className='container'>
          {/* <HeaderComponent /> */}
          <div className='container'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/'exact element={<ListSongComponent />} />
              <Route path='/songs' element={<ListSongComponent />} />
              <Route path='/add-song' element={<UploadSongComponent/>} />
              <Route path='/edit-song/:artistName' element={<UploadSongComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
