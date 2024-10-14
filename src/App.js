import React, {useState, useEffect} from 'react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import classes from './App.module.scss';

const App = () => {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem('books');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const handleAddBook = (title) => {
        setBooks([...books, title]);
    };

    const handleDeleteBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div className={classes.app}>
            <h1>Добавить книгу</h1>
            <BookForm onAdd={handleAddBook}/>
            <BookList books={books} onDelete={handleDeleteBook}/>
        </div>
    );
};

export default App;
