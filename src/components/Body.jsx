import React from 'react';
import Schedule from './Schedule';
import Availability from './Availability';

function Body(){
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
      <Schedule />
      <Availability />
    </div>
  );
}

export default Body;
