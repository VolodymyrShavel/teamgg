import classes from './Card.module.css';
import Cardz from './ui/Cardz';
import React from 'react';
// import {Link} from 'react-router-dom';
// import {getGames} from './games.js';

// import Modal from './Modal';
// import Backdrop from './Backdrop';

function Card(props) {
   // const games = getGames();
   // const [modalIsOpen, setModalIsOpen] = useState(false);

   // function onGameClick(e) {
   //    props.handleGameClick(e.target.innerText.replace(/\s/g, '-'));
   //    e.preventDefault();

   // }
   // console.log(e.target.innerText.replace(/\s/g, '-'));
   // return e.target.innerText;
   // let name = games.map((game) => {
   //    console.log(game.name);
   // });

   // function closeModalHandler() {
   //    console.log('Close it!');
   //    setModalIsOpen(false);
   // }
   // function handleClick(event) {
   //    if (event.target.innerText === props.name) {
   //    }
   // }

   // return games.map((game) => (
   return (
      <Cardz>
         <div className={classes.content}>
            <img src={props.cardPhoto} alt="" />
            <span className={classes.gameName}>{props.cardText}</span>
         </div>
      </Cardz>
   );
   // ));
   /* {modalIsOpen && <Modal onCancel={closeModalHandler} />}
         {modalIsOpen && <Backdrop onCancel={closeModalHandler} />} */
}

export default Card;
