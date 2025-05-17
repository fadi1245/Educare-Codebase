import React from 'react'
import CommonButton from './button'

function Subjects() {
  return (
    <div className="my-4 py-5" style={{backgroundColor:'#F9F7F4'}}>
 <div className="position-relative text-center my-4 px-3 px-md-5">
  <h1 className="m-0">
    Subjects We <span style={{ fontWeight: '200' }}>teach</span>
  </h1>
  <div className="position-absolute end-0 top-0">
    <CommonButton text="View All" />
  </div>
</div>
<div className='d-flex flex-column flex-md-row  justify-content-evenly py-4'>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">Maths</p>
</div>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">Physics</p>
</div>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">Chemistry</p>
</div>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">Biology</p>
</div>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">Computer science</p>
</div>
<div className="d-flex flex-column align-items-center" style={{backgroundColor:'#FFF3E1',borderRadius:'30px'}}>
  <img src="/asset/sujectsimg.png" alt="subject" style={{ width: '150px' }} />
  <p className="text-center mt-2">English</p>
</div>
</div>
</div>
  )
}

export default Subjects
