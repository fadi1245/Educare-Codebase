import React from 'react'
import Detailbox from './detailbox'
import CommonButton from './button'

function Programs() {
  return (
    <div>
  <div className="position-relative text-center my-4 px-3 px-md-5">
  <h1 className="m-0">
    Program we offer <span style={{ fontWeight: '200' }}>For kids</span>
  </h1>
  <div className="position-absolute end-0 top-0">
    <CommonButton text="View All" />
  </div>
</div>
      <div className='d-flex flex-column flex-md-row  justify-content-between px-5'>
      <Detailbox
      heading="English Grammer"
      description="Master the building blocks of writing and communication."
      image="/asset/leftprogram.png"
      showButton={true}
    />
          <Detailbox
      heading="Craft Classes"
      description="Unleash creativity with hands-on projects and artistic fun."
      image="/asset/centerprogram.png"
      showButton={true}
    />
          <Detailbox
      heading="Art and Painting"
      description="Express yourself through colors, sketches, and designs"
      image="/asset/rightprogram.png"
      showButton={true}
    />
      </div>
    </div>
  )
}

export default Programs
