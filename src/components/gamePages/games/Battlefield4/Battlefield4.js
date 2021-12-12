// import {Outlet} from 'react-router-dom';
import classes from './Battlefield4.module.css';
import Games from '../Games';
import React from 'react';

function Battlefield4() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Battlefield4;
