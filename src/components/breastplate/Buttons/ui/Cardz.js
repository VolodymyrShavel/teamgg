import classes from './Cardz.module.css';
import React from 'react';

function Cardz(props) {
   return <div className={classes.card}>{props.children}</div>;
}

export default Cardz;
