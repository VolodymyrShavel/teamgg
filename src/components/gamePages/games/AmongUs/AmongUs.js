// import {Outlet} from 'react-router-dom';
import classes from './AmongUs.module.css';
import Games from '../Games';
import React from 'react';

function AmongUs() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default AmongUs;
