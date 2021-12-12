// import {Outlet} from 'react-router-dom';
import classes from './GarrysMod.module.css';
import Games from '../Games';
import React from 'react';

function GarrysMod() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GarrysMod;
