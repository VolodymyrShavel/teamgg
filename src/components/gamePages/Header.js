import classes from './Header.module.css';
import logo from './gg1.png';
import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
   return (
      <header className={classes.header}>
         <div className={classes.headerCentred}>
            <div className={classes.logo}>
               <Link to="/">
                  <img className={classes.img} src={logo} alt="" />
               </Link>
            </div>
            <div className={classes.text}>
               <h2>Собери лучшую КО манду!</h2>
            </div>
         </div>
      </header>
   );
}

export default Header;
