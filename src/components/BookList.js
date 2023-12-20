import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import BookItem from './BookItem';
import Pages from './Pages';

const BookList = observer(() => {
    const {book}  = useContext(Context)

    useEffect(() => {
    }, [book.selectedType, book.selectedCountry, book.page])
    return (
        <div class="main-content">
        <h3>Фильмы и сериалы</h3>
            {book.book.map(book =>
                <BookItem key ={book.id} book={book} />
            )}
            {/* <Pages/> */}
        </div>
    );
});

export default BookList;