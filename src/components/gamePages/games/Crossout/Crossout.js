// import {Outlet} from 'react-router-dom';
import classes from './Crossout.module.css';
import Games from '../Games';
import React from 'react';

function Crossout() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Crossout;
