import React from 'react';

function SearchInput(props) {
   return (
      <div className={props.className}>
         <div className={props.className1}>
            <input
               type="text"
               maxLength="20"
               placeholder="Искать игру..."
               onChange={props.onInputChange}
               // value={props}
            />
            <button onClick={props.onGameSearchClick}>
               {props.gameSearchName}
            </button>
         </div>
      </div>
   );
}

export default SearchInput;
