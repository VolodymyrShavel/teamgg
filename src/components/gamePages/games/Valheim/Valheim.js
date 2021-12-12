// import {Outlet} from 'react-router-dom';
import classes from './Valheim.module.css';
import Games from '../Games';
import React from 'react';

function Valheim() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Valheim;
