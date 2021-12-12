// import {Outlet} from 'react-router-dom';
import classes from './DbD.module.css';
import Games from '../Games';
import React from 'react';

function DbD() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default DbD;
