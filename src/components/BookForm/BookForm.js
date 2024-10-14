import React, {useState} from 'react';
import classes from './BookForm.module.scss';

const BookForm = ({onAdd}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <input
                type="text"
                className={classes.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название книги"
            />
            <button type="submit" className={classes.button}>Добавить</button>
        </form>
    );
};

export default BookForm;
