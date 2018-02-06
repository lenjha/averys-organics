import React from 'react';
import PropTypes from 'prop-types';

AvailabilityInfo.PropTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

function AvailabilityInfo(props){
  // // // Method 1 // // //
  // const newArray = props.selection.map((produceItem, index) =>
  //   <li key={index}>{produceItem}</li>
  // );

  return (
    // // // Method 2 // // //
    <div>
      <style jsx>{`
        div {
          background: honeydew;
          padding: 20px;
          margin-bottom: 20px;
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
