import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Bars/Sidebar';
import Topbar from '../components/Bars/Topbar';

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        
        <div>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default Dashboard