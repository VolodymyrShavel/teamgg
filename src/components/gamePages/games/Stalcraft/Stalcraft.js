// import {Outlet} from 'react-router-dom';
import classes from './Stalcraft.module.css';
import Games from '../Games';
import React from 'react';

function Stalcraft() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Stalcraft;
