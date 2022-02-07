import React from 'react';
import Banner from './Banner';
import DashBoardFooter from './DashBoardFooter';
import DashBoardOptions from './DashBoardOptions';
import Navbar from './Navbar';
import '../../css/DashBoard.css'
import Sidebar from '../sidebar/Sidebar';

function DashBoard() {
  return (
    <div>
    <Sidebar />
    <div  className='dashboard-main'>

      <Navbar />
      <Banner />
      <DashBoardOptions />
      <DashBoardFooter />
    </div>
    </div>
  );
}

export default DashBoard;
