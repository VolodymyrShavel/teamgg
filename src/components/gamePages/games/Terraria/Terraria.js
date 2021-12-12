// import {Outlet} from 'react-router-dom';
import classes from './Terraria.module.css';
import Games from '../Games';
import React from 'react';

function Terraria() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Terraria;
