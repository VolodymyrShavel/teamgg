// import {Outlet} from 'react-router-dom';
import classes from './ClashofClans.module.css';
import Games from '../Games';
import React from 'react';

function ClashofClans() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default ClashofClans;
