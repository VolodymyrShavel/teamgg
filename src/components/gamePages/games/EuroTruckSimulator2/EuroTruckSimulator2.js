// import {Outlet} from 'react-router-dom';
import classes from './EuroTruckSimulator2.module.css';
import Games from '../Games';
import React from 'react';

function EuroTruckSimulator2() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default EuroTruckSimulator2;
