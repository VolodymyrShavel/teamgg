// import {Outlet} from 'react-router-dom';
import classes from './Raft.module.css';
import Games from '../Games';
import React from 'react';

function Raft() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Raft;
