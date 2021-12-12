// import {Outlet} from 'react-router-dom';
import classes from './StardewValley.module.css';
import Games from '../Games';
import React from 'react';

function StardewValley() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default StardewValley;
