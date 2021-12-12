// import {Outlet} from 'react-router-dom';
import classes from './BattlefieldV.module.css';
import Games from '../Games';
import React from 'react';

function BattlefieldV() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default BattlefieldV;
