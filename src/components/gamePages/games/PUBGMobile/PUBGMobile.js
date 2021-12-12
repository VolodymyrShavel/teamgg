// import {Outlet} from 'react-router-dom';
import classes from './PUBGMobile.module.css';
import Games from '../Games';
import React from 'react';

function PUBGMobile() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default PUBGMobile;
