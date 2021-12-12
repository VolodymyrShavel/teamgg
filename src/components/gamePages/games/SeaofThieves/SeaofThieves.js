// import {Outlet} from 'react-router-dom';
import classes from './SeaofThieves.module.css';
import Games from '../Games';
import React from 'react';

function SeaofThieves() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default SeaofThieves;
