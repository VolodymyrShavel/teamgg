// import {Outlet} from 'react-router-dom';
import classes from './Osu.module.css';
import Games from '../Games';
import React from 'react';

function Osu() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Osu;
