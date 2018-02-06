import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          background: salmon;
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <h1>Avery's Organics</h1>
    </div>
  );
}

export default Header;
