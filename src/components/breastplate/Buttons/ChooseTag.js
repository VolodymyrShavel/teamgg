import Tag from './Tag';
import classes from './ChooseTag.module.css';
import React from 'react';

// import jsonfile from './games.json';

function ChooseTag(props) {
   return (
      <div className={classes.tags}>
         <div className={classes.tags_centred}>
            <Tag onClick={props.onTagClick} name={'Популярные'} />
            <Tag onClick={props.onTagClick} name={'Соревновательные'} />
            <Tag onClick={props.onTagClick} name={'Мобильные'} />
            <Tag onClick={props.onTagClick} name={'Кооперативные'} />
            <Tag onClick={props.onTagClick} name={'Онлайн'} />
         </div>
      </div>
   );
}

export default ChooseTag;
