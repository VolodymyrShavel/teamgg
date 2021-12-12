// import {Outlet} from 'react-router-dom';
import classes from './Phasmophobia.module.css';
import Games from '../Games';
import React from 'react';

function Phasmophobia() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Phasmophobia;
