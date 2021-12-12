// import {Outlet} from 'react-router-dom';
import classes from './ApexLegends.module.css';
import Games from '../Games';
import React from 'react';

function ApexLegends() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default ApexLegends;
