import React from 'react';
import {getGames} from './games.js';
import {useState} from 'react';
import ShowResult from './ShowResult';
// import {Link} from 'react-router-dom';

function Cards(props) {
   const [inputValue, setInputValue] = useState('');
   const [tagState, setTagState] = useState('Популярные');

   const [gameSearchChoosen, setGameSearchChoosen] = useState('');

   let gamesInfo = getGames();

   function gameSearch() {
      gameSearchChoosen
         ? setGameSearchChoosen('')
         : setGameSearchChoosen('Все');
   }

   // console.log(gameFound.name);

   // function checkGame(gameName) {
   //    console.log(gameName);
   // }
   // <Link to={}/>
   // if (gameName === '') {
   //    console.log('lol');
   // }
   // gameName.preventDefault();
   // setGameChoosen(gameName);
   // gameFound.map((game) => game.name);
   // .replace(/\s/g, '-')).matches(gameName);
   // console.log(gameChoosen);

   // console.log(
   //    gameFound.filter((games) => {
   //       games.name.includes('Rust');
   //    })
   // );

   // <Link to="" onClick/>
   // console.log(gameFound.map((game) => game.name.replace(/\s/g, '-')));
   // console.log(gameChoosen);
   // gameName.preventDefault();
   // gameName.map((game) => {
   //    console.log(game.name);
   // });

   function onTagClick(e) {
      setTagState(e.target.innerHTML);
   }

   const filteredRegex = new RegExp(
      [...inputValue].join(String.raw`(\w*[\s\-\.'\+:])*?`),
      'ig'
   );
   const sortingRegex = new RegExp(
      [...inputValue].join(String.raw`\w*[\s\-\.'\+:]`),
      'ig'
   );
   const filteredGames = gamesInfo
      .filter((game) => {
         if (!inputValue) {
            return game;
         }
         if (game.name.match(filteredRegex)) {
            return game;
         }
      })
      .sort((a, b) => {
         const aMatch = (a = filteredRegex);
         const bMatch = (b = sortingRegex);
         if (aMatch && !bMatch) return -1;
         else if (bMatch && !aMatch) return 1;
         return 0;
      });
   const filteredTags = gamesInfo
      .filter((game) => {
         if (game.tag.includes(tagState)) {
            return game;
         }
      })
      .filter((game) => {
         if (!inputValue) {
            return game;
         }
         if (game.name.match(filteredRegex)) {
            return game;
         }
      })
      .sort((a, b) => {
         const aMatch = (a = filteredRegex);
         const bMatch = (b = sortingRegex);
         if (aMatch && !bMatch) return -1;
         else if (bMatch && !aMatch) return 1;
         return 0;
      });

   return (
      <>
         <ShowResult
            onTagClick={onTagClick}
            onInputChange={(event) => setInputValue(event.target.value)}
            onGameSearchClick={gameSearch}
            gameSearchName={gameSearchChoosen ? 'Все' : 'Тег'}
            filteredGames={gameSearchChoosen ? filteredGames : filteredTags}
         />
      </>
   );
}

export default Cards;
