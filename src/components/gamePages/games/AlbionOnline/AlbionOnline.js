// import {Outlet} from 'react-router-dom';
import classes from './AlbionOnline.module.css';
import Games from '../Games';
import React from 'react';


function AlbionOnline() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default AlbionOnline;
