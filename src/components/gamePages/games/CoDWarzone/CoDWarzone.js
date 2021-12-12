// import {Outlet} from 'react-router-dom';
import classes from './CoDWarzone.module.css';
import Games from '../Games';
import React from 'react';

function CoDWarzone() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default CoDWarzone;
