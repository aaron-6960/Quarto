// LoadingSpinner.js

import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []); // Run once on component mount

  return (
    <>
    <div>
      {loading && (
        <div
          style={{
            border: '8px solid #f3f3f3',
            borderTop: '8px solid #3498db',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
            margin: '20px auto',
          }}
        >
        </div>

      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
    <p className='text-center'>Loading your response</p>
    </>
  );
};

export default LoadingSpinner;
