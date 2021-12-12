// import {Outlet} from 'react-router-dom';
import classes from './SevenDaystoDie.module.css';
import Games from '../Games';
import React from 'react';

function SevenDaystoDie() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default SevenDaystoDie;
