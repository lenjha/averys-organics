import React from 'react';
import PropTypes from 'prop-types';

ScheduleInfo.PropTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

function ScheduleInfo(props){
  return (
    <div>
      <style jsx>{`
          div {
            background: aliceblue;
            display: flex;
            flex-direction: column;
            border: 1px solid #fff;
            padding: 0 0 20px 20px;
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
