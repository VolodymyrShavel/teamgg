// import {Outlet} from 'react-router-dom';
import classes from './WoT.module.css';
import Games from '../Games';
import React from 'react';

function WoT() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default WoT;
