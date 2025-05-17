import React from 'react';

function World() {
  const itemStyle = {
    display: 'inline-block',
    marginRight: '20px',
    verticalAlign: 'middle',
  };

  return (
    <div style={{color:'#8A1538'}}>
      <div
        className="mx-5"
        style={{ textAlign: 'center', margin: '0 auto', padding: '0 10px' }}
      >
        <h1>
          Prepare Your Child for a
          <span style={{ fontWeight: 200 }}>World of Opportunities with Educare</span>
        </h1>
        <img
          src="/asset/world.png"
          alt="subject"
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
        />
      </div>

      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          border: '1px solid #ccc',
          padding: '10px 0',
          boxSizing: 'border-box',
          backgroundColor:'#FFF3E1'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'marquee 15s linear infinite',
          }}
        >
          <span style={itemStyle}>
            Education is the foundation of greatness; let’s build it together
          </span>
          <img
            src="/asset/education.png"
            alt="education"
            style={{ ...itemStyle, height: '48px', marginRight: 0 }}
          />
          <span style={itemStyle}>
            Learning today, leading tomorrow – the Educare way
          </span>
          <img
            src="/asset/education.png"
            alt="education"
            style={{ ...itemStyle, height: '48px', marginRight: 0 }}
          />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            Turning dreams into achievements through dedicated guidance
          </span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default World;
