// import {Outlet} from 'react-router-dom';
import classes from './Warface.module.css';
import Games from '../Games';
import React from 'react';

function Warface() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Warface;
