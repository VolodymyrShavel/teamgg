// import {Outlet} from 'react-router-dom';
import classes from './MobileLegends.module.css';
import Games from '../Games';
import React from 'react';

function MobileLegends() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default MobileLegends;
