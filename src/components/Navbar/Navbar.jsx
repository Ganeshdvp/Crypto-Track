import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow-icon.jpg'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  }
  return (
    <>
      <div className='navbar'>
        <Link to={'/'}>
          <img src={logo} alt='' className='logo' />
          <h2>CryptoTrack</h2>
        </Link>
        <ul>
          <Link to={'/'}> <li>Home</li></Link>
          <Link to={'/features'}><li>Features</li></Link>
          <li>Pricing</li>
          <li>ContactUs</li>
        </ul>
        <div className='nav-right'>
          <select onChange={currencyHandler}>
            <option value='usd'>USD</option>
            <option value='inr'>INR</option>
            <option value='eur'>EUR</option>
          </select>
          <button>Sign Up <img src={arrow_icon} /></button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
