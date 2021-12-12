// import {Outlet} from 'react-router-dom';
import classes from './WarThunder.module.css';
import Games from '../Games';
import React from 'react';

function WarThunder() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default WarThunder;
