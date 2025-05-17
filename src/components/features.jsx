import React from 'react'
import { LuScanFace, LuHandHeart } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";

function Features() {
  return (
    <div style={{ backgroundColor: '#FFF3E1' }}>
      <div 
        className='d-flex justify-content-center justify-content-md-between align-items-center py-3 px-3 px-md-5' 
        style={{ flexWrap: 'wrap' }}  
      >
        <div className='d-flex align-items-center px-3 mb-3 mb-md-0' style={{ color: '#8A1538' }}>
          <LuScanFace size={32} style={{ marginRight: '10px' }} />
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Personal Attention</p>
        </div>

        <div className="d-none d-sm-block" style={{ height: '30px', width: '1px', backgroundColor: '#000', margin: '0 12px' }}></div>

        <div className='d-flex align-items-center px-3 mb-3 mb-md-0' style={{ color: '#8A1538' }}>
          <GoTrophy size={32} style={{ marginRight: '10px' }} />
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Growth Mindset</p>
        </div>

        <div className="d-none d-sm-block" style={{ height: '30px', width: '1px', backgroundColor: '#000', margin: '0 12px' }}></div>

        <div className='d-flex align-items-center px-3 mb-3 mb-md-0' style={{ color: '#8A1538' }}>
          <LuHandHeart size={32} style={{ marginRight: '10px' }} />
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Skill Development</p>
        </div>

        <div className="d-none d-sm-block" style={{ height: '30px', width: '1px', backgroundColor: '#000', margin: '0 12px' }}></div>

        <div className='d-flex align-items-center px-3 mb-3 mb-md-0' style={{ color: '#8A1538' }}>
          <FaUserGraduate size={32} style={{ marginRight: '10px' }} />
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Passionate Teaching</p>
        </div>
      </div>
    </div>
  )
}

export default Features;
