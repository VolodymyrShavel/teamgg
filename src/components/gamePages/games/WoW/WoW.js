// import {Outlet} from 'react-router-dom';
import classes from './WoW.module.css';
import Games from '../Games';
import React from 'react';

function WoW() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default WoW;
