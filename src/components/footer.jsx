import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:'#8A1538', color:'white'}}>
      <div className='my-5 mx-5'>
        <h2>Educare</h2>
      </div>
      <div className='d-flex justify-content-evenly'>
        <div>
            <h3>Naviation</h3>
            <p>Home</p>
            <p>About</p>
            <p>Curriculum</p>
            <p>Carrier</p>
        </div>
        <div>
        <h3>Conatct Info</h3>
            <p>educare@gmail.com</p>
            <p>info@educare.com</p>
            <p>+974 4412 3456</p>
            <p>+974 5534 7890</p>
        </div>
        <div>
            <h3>Official adress</h3>
            <p>EducareEducation Center</p>
            <p>Building 45, Al Sadd Street,</p>
            <p>Doha, Qatar</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
