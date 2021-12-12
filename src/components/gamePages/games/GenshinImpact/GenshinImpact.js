// import {Outlet} from 'react-router-dom';
import classes from './GenshinImpact.module.css';
import Games from '../Games';
import React from 'react';

function GenshinImpact() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GenshinImpact;
