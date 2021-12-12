import ChooseTag from './ChooseTag';
import SearchInput from './SearchInput';
import ShowGame from './ShowGame';
import classes from './ShowResult.module.css';
import React from 'react';

function ShowResult(props) {
   return (
      <div className={classes.main_tab}>
         <ChooseTag onTagClick={props.onTagClick} />
         <SearchInput
            className={classes.input}
            className1={classes.input_place}
            onInputChange={props.onInputChange}
            onGameSearchClick={props.onGameSearchClick}
            gameSearchName={props.gameSearchName}
         />
         <div className={classes.cards_main}>
            <div className={classes.cards}>
               <ShowGame filteredGames={props.filteredGames} />
            </div>
         </div>
      </div>
   );
}

export default ShowResult;
