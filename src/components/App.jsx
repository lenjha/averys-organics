import React from 'react';
import Header from './Header';
import Body from './Body';

function App(){
  return (
    <div>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
      `}</style>
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
