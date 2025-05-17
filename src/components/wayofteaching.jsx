import React from 'react'

function Wayofteaching() {
  return (
    <div>
      <div
        className='d-flex flex-column flex-md-row align-items-center px-3 px-md-5 py-5 my-5'
        style={{ backgroundColor: '#F9F7F4' }}
      >
        <div className='px-2 px-md-5 mb-4 mb-md-0' style={{ flex: 1 }}>
          <h1>Our way of</h1>
          <p>
            Every teacher at Educare brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.
          </p>
          <p>
            We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.
          </p>
          <p>
            Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively.
          </p>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            src="/asset/teachingpic.jpg"
            alt=""
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '30px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Wayofteaching
