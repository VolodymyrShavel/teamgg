// import {Outlet} from 'react-router-dom';
import classes from './Muck.module.css';
import Games from '../Games';
import React from 'react';

function Muck() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Muck;
