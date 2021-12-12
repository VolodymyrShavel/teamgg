// import jsonfile from './games.json';
import {Outlet, Link} from 'react-router-dom';
import classes from './Games.module.css';
import React from 'react';
// import Nav from './Nav';
import Main from './Main';
import Header from '../Header';
import Modal from './Modal';
import Backdrop from './Backdrop';
import {useState} from 'react';
// import {getGames} from '../../breastplate/Buttons/games';

function Games(props) {
   // const findGame = getGames();
   //  console.log(jsonfile);
   const [showModal, setShowModal] = useState(false);
   function openModal() {
      setShowModal(true);
   }
   function closeModal() {
      setShowModal(false);
   }

   return (
      <>
         <Header />
         <div className={classes.main_place}>
            <main className={classes.main_section}>
               <section className={classes.main_body}>
                  <div className={classes.main_body_name}>
                     {/* {findGame.map((game) => {
                        return <Main name={game.name} />;
                     })} */}
                     <Main />
                  </div>
                  <div className={classes.main_body_button}>
                     <button className={classes.leaveModel} onClick={openModal}>
                        ОСТАВИТЬ ЗАЯВКУ
                     </button>
                  </div>
                  <div></div>
               </section>
            </main>
            <Outlet />
            {showModal && <Modal />}
            {showModal && <Backdrop onCancel={closeModal} />}
         </div>
      </>
   );
}

export default Games;
