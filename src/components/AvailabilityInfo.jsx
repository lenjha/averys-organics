import React from 'react';

function AvailabilityInfo(props){
  return (
    <div>
      <style jsx>{`
        div {
          background: honeydew;
        }
        ul {
          padding: 0;
          list-style: none;
        }
      `}</style>
      <h4>{props.month}</h4>
      <ul>
        {props.selection.map((produceItem, index) =>
          <li key={index}>{produceItem}</li>
        )}
      </ul>
    </div>
  );
}

export default AvailabilityInfo;
