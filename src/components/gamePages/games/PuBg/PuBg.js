// import {Outlet} from 'react-router-dom';
import classes from './PuBg.module.css';
import Games from '../Games';
import React from 'react';

function PuBg() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default PuBg;
