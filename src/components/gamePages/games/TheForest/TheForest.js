// import {Outlet} from 'react-router-dom';
import classes from './TheForest.module.css';
import Games from '../Games';
import React from 'react';

function TheForest() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default TheForest;
