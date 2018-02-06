import React from 'react';

function ScheduleInfo(props){
  return (
    <div>
      <style jsx>{`
          div {
            background: aliceblue;
            display: flex;
            flex-direction: column;
            border: 1px solid #fff;
          }
          h4 {
            margin-bottom: 10px;
            text-decoration: underline;
          }
      `}</style>
      <h4>{props.day}</h4>
      <span>{props.location}</span>
      <span>{props.hours}</span>
      <span>{props.booth}</span>
    </div>
  );
}

export default ScheduleInfo;
