// import {Outlet} from 'react-router-dom';
import classes from './Valorant.module.css';
import Games from '../Games';
import React from 'react';

function Valorant() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Valorant;
