import React from 'react'
import CommonButton from './button'
import Detailbox from './detailbox'

function Story() {
  return (
    <div>
      <div className='d-flex flex-column flex-md-row my-5'>
        <div className='px-5'>
          <h1 className='mt-5'>The Story of <span style={{ fontWeight: '800' }}>Educare</span></h1>
          <p className='py-4'>
            At Educare education center, we believe that every student deserves personalized, focused attention to reach their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs, strengths, and learning styles.
          </p>
          <p>
            Founded on a passion for education and a commitment to excellence, Educare education center was established to offer students a supportive and engaging learning environment. Our team of experienced tutors is dedicated to helping students excel academically while also building confidence, independence, and a love for learning.
          </p>
          <p className='py-4'>
            We specialize in a wide range of subjects across all grade levels, including math, science, English, and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are here to support their journey.
          </p>
          <CommonButton text="Read More" />
        </div>
        <div className="text-center p-4">
          <img
            src="/asset/Group.png"
            alt="img"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
          />
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap gap-4 px-5 mx-5">
        <div className="flex-fill" style={{ maxWidth: '400px' }}>
          <Detailbox
            heading="Mission"
            description="To help students succeed with personalized, one-to-one tutoring that builds confidence, skills, and a love for learning."
            image="/asset/flag.png"
            showButton={false}
          />
        </div>
        <div className="flex-fill" style={{ maxWidth: '400px' }}>
          <Detailbox
            heading="Vision"
            description="To be a trusted center where students reach their potential, build confidence, and prepare for a bright future."
            image="/asset/rocket.png"
            showButton={false}
          />
        </div>
        <div>
          <img src="/asset/arrow.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default Story;
