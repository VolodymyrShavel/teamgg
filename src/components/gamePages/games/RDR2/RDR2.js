// import {Outlet} from 'react-router-dom';
import classes from './RDR2.module.css';
import Games from '../Games';
import React from 'react';

function RDR2() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default RDR2;
