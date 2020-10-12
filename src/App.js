import React from 'react';
import Intro from './components/layout/Intro';
import Header from './components/layout/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';

export default function App() {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header/>
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  )
}
