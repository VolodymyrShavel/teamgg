// import {Outlet} from 'react-router-dom';
import classes from './GFFWonderland.module.css';
import Games from '../Games';
import React from 'react';

function GFFWonderland() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GFFWonderland;
