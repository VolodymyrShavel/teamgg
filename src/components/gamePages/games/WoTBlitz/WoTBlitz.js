// import {Outlet} from 'react-router-dom';
import classes from './WoTBlitz.module.css';
import Games from '../Games';
import React from 'react';

function WoTBlitz() {
   return (
      <div className={classes.centred}>
         <Games name="World of Tanks Blitz" />
      </div>
   );
}

export default WoTBlitz;
