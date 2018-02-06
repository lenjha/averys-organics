import React from 'react';
import Schedule from './Schedule';
import Availability from './Availability';
import { Switch, Route } from 'react-router-dom';

function Body(){
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
      <Switch>
        <Route path='/availability' component={Availability}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </div>
  );
}

export default Body;
