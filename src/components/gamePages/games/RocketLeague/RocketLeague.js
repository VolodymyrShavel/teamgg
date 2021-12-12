// import {Outlet} from 'react-router-dom';
import classes from './RocketLeague.module.css';
import Games from '../Games';
import React from 'react';

function RocketLeague() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default RocketLeague;
