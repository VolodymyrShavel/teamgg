// import {Outlet} from 'react-router-dom';
import classes from './CounterStrike.module.css';
import Games from '../Games';
import React from 'react';

function CounterStrike() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default CounterStrike;
