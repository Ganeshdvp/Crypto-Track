import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow-icon.jpg'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';
import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import { useRef } from 'react';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const menuRef = useRef(null);

    useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);


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
        {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul ref={menuRef} className={menuOpen ? 'open' : ''}>
          <Link to={'/'}> <li>Home</li></Link>
          <Link to={'/features'}><li>Features</li></Link>
          <li>Price</li>
          <Link to= {'/contact'}><li>ContactUs</li></Link>
          {/* Move nav-right here for mobile */}
          <li className="nav-right-mobile">
            <select onChange={currencyHandler}>
              <option value='usd'>USD</option>
              <option value='inr'>INR</option>
              <option value='eur'>EUR</option>
            </select>
            <button onClick={() => { setShowSignUp(true); setShowSignIn(false); setMenuOpen(false); }}>
              Sign Up <img src={arrow_icon} />
            </button>
          </li>
        </ul>
        <div className='nav-right'>
          <select onChange={currencyHandler}>
            <option value='usd'>USD</option>
            <option value='inr'>INR</option>
            <option value='eur'>EUR</option>
          </select>
          <button onClick={()=> {setShowSignUp(true); setShowSignIn(false)}}>Sign Up <img src={arrow_icon} /></button>
        </div>
      </div>

      {showSignUp && (
        <div className="form-overlay">
          {
            showSignIn ? (
              <SignIn onClose= {()=> setShowSignUp(false)} onShowSignUp = {()=> setShowSignIn(false)} />
            ) : (
              <SignUp 
              onClose={() => setShowSignUp(false)} 
              onShowSignIn={() => setShowSignIn(true)} 
            />
            )
          }
        </div>
      )}
    </>
  )
}

export default Navbar;
