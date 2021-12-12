import classes from './LoL.module.css';
import Games from '../Games';
import React from 'react';

function LoL() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default LoL;
