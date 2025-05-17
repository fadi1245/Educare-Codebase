import React from 'react';
import CommonButton from './button';

function Detailbox({ heading, description, image, showButton = true }) {
  return (
    <div
      style={{
        maxWidth: '500px',
        backgroundColor: '#FFF3E1',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'visible',
      }}
      className="d-flex justify-content-between align-items-start py-3 px-3"
    >
      <div style={{ flex: 1 }}>
        <h5>{heading}</h5>
        <p style={{ marginBottom: showButton ? '10px' : 0 }}>{description}</p>

        {showButton && (
          <CommonButton
            text="Know More"
            style={{ padding: '6px 12px', fontSize: '0.85rem' }}
          />
        )}
      </div>

      <div
        style={{
          position: 'relative',
          top: '-40px',
        }}
      >
        <img
          src={image}
          alt="img"
          style={{ width: '100px', marginLeft: '10px' }}
        />
      </div>
    </div>
  );
}

export default Detailbox;
