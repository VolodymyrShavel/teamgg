// import {Outlet} from 'react-router-dom';
import classes from './Satisfactory.module.css';
import Games from '../Games';
import React from 'react';

function Satisfactory() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Satisfactory;
