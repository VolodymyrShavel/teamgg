// import {Outlet} from 'react-router-dom';
import classes from './BrawlStars.module.css';
import Games from '../Games';
import React from 'react';

function BrawlStars() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default BrawlStars;
