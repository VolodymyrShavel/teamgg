// import {Outlet} from 'react-router-dom';
import classes from './Arma3.module.css';
import Games from '../Games';
import React from 'react';

function Arma3() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Arma3;
