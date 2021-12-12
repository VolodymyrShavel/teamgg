// import {games} from './games';
import Card from './Card';
import {Link} from 'react-router-dom';
import React from 'react';

function ShowGame(props) {
   let foo = props.filteredGames.map((game) => (
      <Link
         to={`/games/${game.uri}`}
         // key={props.name}
         style={{textDecoration: 'none'}}
         // onClick={onGameClick}
      >
         <Card key={game.name} cardPhoto={game.image} cardText={game.name} />
      </Link>
   ));
   return foo;
}

export default ShowGame;
