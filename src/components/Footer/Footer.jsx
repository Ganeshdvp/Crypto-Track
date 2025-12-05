import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <p>company</p>
            <ul>
              <li><a href='#'>about Us</a></li>
              <li><a href='#'>our services</a></li>
              <li><a href='#'>privacy policy</a></li>
              <li><a href='#'>affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p>get help</p>
            <ul>
            <li><a href='#'>FAQ</a></li>
              <li><a href='#'>shipping</a></li>
              <li><a href='#'>returns</a></li>
              <li><a href='#'>order status</a></li>
              <li><a href='#'>payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p>buy coins</p>
            <ul>
            <li><a href='#'>payment</a></li>
              <li><a href='#'>track</a></li>
              <li><a href='#'>sell</a></li>
              <li><a href='#'>status</a></li>
              <li><a href='#'>cart</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p>follow Us</p>
            <div className='social-links'>
              <a href='#' aria-label='facebook'><i className='fab fa-facebook-f'></i></a>
              <a href='#' aria-label='twitter'><i className='fab fa-twitter'></i></a>
              <a href='#' aria-label='instagram'><i className='fab fa-instagram'></i></a>
              <a href='#' aria-label='linkedin'><i className='fab fa-linkedin-in'></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='footer1'>
      <p>Copyright @ 2024 , Cryptoplace - All Right Reserved</p>
    </div>
    </>
  )
}

export default Footer
