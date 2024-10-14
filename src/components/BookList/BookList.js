import React from 'react';
import BookItem from '../BookItem/BookItem';
import classes from './BookList.module.scss';

const BookList = ({books, onDelete}) => {
    return (
        <div className={classes.list}>
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    title={book}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
};

export default BookList;
