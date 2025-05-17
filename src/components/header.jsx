import React, { useState } from 'react';
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import style from '../styles/Home.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{ backgroundColor: '#8A1538' }}
        className={`d-flex justify-content-between align-items-center py-3 ${style['custom-px-7']}`}
      >
        <div className='d-flex align-items-center'>
          <img src="/asset/Vector.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <h1 className="text-white fs-4 m-0">Educare</h1>
        </div>

        <div className="d-none d-md-flex align-items-center" style={{ gap: '3rem' }}>
          <p className="text-white m-0">About Us</p>
          <div className='d-flex align-items-center gap-1'>
            <p className="text-white m-0">Courses</p>
            <IoIosArrowDown />
          </div>
          <p className="text-white m-0">Careers</p>
          <p className="text-white m-0">News and Blog</p>
          <p className="text-white m-0">Payments</p>
        </div>

        <div className="d-none d-md-flex align-items-center" style={{ gap: '1rem' }}>
          <div>
            <div className='d-flex align-items-center text-white'>
              <PiPhoneDisconnectBold className='me-2' />
              <p className='m-0'>+94 5558 4472</p>
            </div>
            <div className='d-flex align-items-center text-white'>
              <AiTwotoneMail className='me-2' />
              <p className='m-0'>info@educare.qa</p>
            </div>
          </div>
          <button className="btn btn-light" style={{ color: '#8A1538' }}>Contact Us</button>
        </div>

        <div className="d-md-none">
          <IoMdMenu size={28} color="#fff" onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '75%',
          backgroundColor: '#8A1538',
          zIndex: 1000,
          padding: '20px',
          color: 'white',
          transition: 'transform 0.3s ease-in-out'
        }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="m-0">Menu</h4>
            <IoMdClose size={28} onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer' }} />
          </div>

          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
            <li>About Us</li>
            <li>Courses <IoIosArrowDown /></li>
            <li>Careers</li>
            <li>News and Blog</li>
            <li>Payments</li>
            <hr style={{ borderColor: 'white' }} />
            <li><PiPhoneDisconnectBold /> +94 5558 4472</li>
            <li><AiTwotoneMail /> info@educare.qa</li>
            <li className="mt-3">
              <button className="btn btn-light w-100" style={{ color: '#8A1538' }}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
