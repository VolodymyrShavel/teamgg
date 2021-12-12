import classes from './Tag.module.css';
import React from 'react';

function Tag(props) {
   return (
      <>
         <button className={classes.button} onClick={props.onClick}>
            {props.name}
         </button>
      </>
   );
}

export default Tag;
