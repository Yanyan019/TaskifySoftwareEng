import './App.css';
import React from 'react';
import Sidebar from './sidebar';
import Calendar from './Calendar';



function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
