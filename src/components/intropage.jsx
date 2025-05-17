import React, { useState, useEffect } from 'react';
import style from '../styles/Intropage.module.css';
import CommonButton from './button';
import { motion, AnimatePresence } from 'framer-motion';

const logos = [
  '/asset/logo1.png',
  '/asset/logo2.png',
  '/asset/logo3.png',
  '/asset/logo4.png',
  '/asset/logo5.png',
];

const mainHeadlines = [
  'Personalized One-to-One',
  'Individual Tuition, ',
  'Master IELTS, TOEFL, and',
];

const subHeadlines = [
  'Tutoring at our center',
  'For all students till 12th grade!',
  'Beyond with Expert Guidance!',
];

function Intropage() {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(logoInterval);
  }, []);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % mainHeadlines.length);
    }, 4000);
    return () => clearInterval(headlineInterval);
  }, []);

  return (
    <div className={style.bgSection}>
      <div className="text-center">
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', height: '50px', overflow: 'hidden' }}>
          <AnimatePresence>
            <motion.h1
              key={headlineIndex}
              className={style.headingMain}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ position: 'absolute', width: '100%' }}
            >
              {mainHeadlines[headlineIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', height: '60px', overflow: 'hidden', marginBottom: '10px' }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`sub-${headlineIndex}`}
              className={style.headingSub}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ position: 'absolute', width: '100%' }}
            >
              {subHeadlines[headlineIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between px-4 align-items-center mt-0">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/asset/leftimg.png"
            alt="img"
            style={{ width: '500px', marginRight: '10px' }}
          />
        </motion.div>

        <div className="text-center">
          <CommonButton text="Book a Free Demo Class" />
          <p className="py-4 fw-bold" style={{ color: '#8A1538' }}>
            Curriculum we offer:
          </p>

          <div
            className="overflow-hidden d-flex justify-content-center"
            style={{ width: '220px', height: '80px', position: 'relative' }}
          >
            <div style={{ width: '220px', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLogo}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    width: '100%',
                  }}
                >
                  <img
                    src={logos[currentLogo]}
                    alt="logo"
                    style={{
                      height: '40px',
                      width: 'auto',
                      objectFit: 'contain',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/asset/rightimg.png"
            alt="img"
            style={{ width: '500px', marginRight: '10px' }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Intropage;
