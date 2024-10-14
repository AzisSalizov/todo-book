import React from 'react';
import classes from './BookItem.module.scss';

const BookItem = ({title, onDelete}) => {
    return (
        <div className={classes.item}>
            <span className={classes.title}>{title}</span>
            <button className={classes.deleteButton} onClick={onDelete}>
                Удалить
            </button>
        </div>
    );
};

export default BookItem;
