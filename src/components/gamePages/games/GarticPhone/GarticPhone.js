// import {Outlet} from 'react-router-dom';
import classes from './GarticPhone.module.css';
import Games from '../Games';
import React from 'react';

function GarticPhone() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GarticPhone;
