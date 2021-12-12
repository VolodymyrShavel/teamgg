// import {Outlet} from 'react-router-dom';
import classes from './ProjectZomboid.module.css';
import Games from '../Games';
import React from 'react';

function ProjectZomboid() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default ProjectZomboid;
