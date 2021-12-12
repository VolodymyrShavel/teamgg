// import {Outlet} from 'react-router-dom';
import classes from './Warframe.module.css';
import Games from '../Games';
import React from 'react';

function Warframe() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Warframe;
