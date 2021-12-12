// import {Outlet} from 'react-router-dom';
import classes from './ScrapMechanic.module.css';
import Games from '../Games';
import React from 'react';

function ScrapMechanic() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default ScrapMechanic;
