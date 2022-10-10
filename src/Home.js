import React from 'react';
import { Link } from 'react-router-dom';
import EnteryPoint from './EnteryPoint';
import './Home.css'

const Home = () => {
  return (
    <>
    <nav className='Nav_Design'>
    <ul className='nav_link'>
      <li>
        <Link to="/EnteryPoint">Entry Point</Link>
      </li>
      <li>
        <Link to="/ExitPoint">Exit Point</Link>
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Home