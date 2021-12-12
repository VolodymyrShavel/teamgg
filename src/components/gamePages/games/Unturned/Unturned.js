// import {Outlet} from 'react-router-dom';
import classes from './Unturned.module.css';
import Games from '../Games';
import React from 'react';

function Unturned() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Unturned;
