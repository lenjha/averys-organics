import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          background: salmon;
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          display: inline;
          margin: 10px;
          color: white;
        }
        a {
          color: white;
        }
        a:hover {
          color: red;
        }
      `}</style>
      <h1>Avery's Organics</h1>
      <ul>
        <li><Link to='schedule' style={{ textDecoration : 'none'}}><a>Schedule</a></Link></li>
        <li><Link to='availability' style={{ textDecoration : 'none'}}><a>Available Produce</a></Link></li>
      </ul>
    </div>
  );
}

export default Header;
