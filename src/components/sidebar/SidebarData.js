import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import  floss from '../../images/floss.svg'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillDashboard style={{color:`rgb(107,109,104)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'My Plan',
    path: '/reports',
    icon: <IoIcons.IoIosPaper style={{color:`rgb(107,109,104)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/products',
    icon: <img src={floss} style={{height:`20px`,width:`20px`}} />,
    cName: 'nav-text'
  },
  {
    title: 'My bookings',
    path: '/team',
    icon: <FaIcons.FaCalendarAlt style={{color:`rgb(107,109,104)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/messages',
    icon: <FaIcons.FaHistory style={{color:`rgb(107,109,104)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/support',
    icon: <AiIcons.AiTwotoneSetting style={{color:`rgb(107,109,104)`}} />,
    cName: 'nav-text'
  }
];