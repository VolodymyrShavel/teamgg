// import {Outlet} from 'react-router-dom';
import classes from './Grounded.module.css';
import Games from '../Games';
import React from 'react';

function Grounded() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Grounded;
