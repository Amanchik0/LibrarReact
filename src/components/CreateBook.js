import React, { useState, useContext } from "react";
import { Context } from "../index";

const CreateBook = () => {
  const { book } = useContext(Context);

  const [newBook, setNewBook] = useState({
    title: "",
    price: 0,
    author: "",
    pageCount: 0,
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBookWithId = {
      ...newBook,
      id: book.book.length + 1,
    };

    book.setBook([...book.book, newBookWithId]);

    setNewBook({
      title: "",
      price: 0,
      author: "",
      pageCount: 0,
      img: "",
    });
  };

  return (
    <div className="main">
      <form
        onSubmit={handleSubmit}
        className="form"
        encType="multipart/form-data"
      >
        <h3>Новая книга</h3>
        <fieldset className="fieldset">
          <label htmlFor="title">Название книги</label>
          <input
            type="text"
            id="title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="price">Цена</label>
          <input
            type="number"
            id="price"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="author">Автор</label>
          <input
            type="text"
            id="author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="pageCount">Количество страниц</label>
          <input
            type="number"
            id="pageCount"
            value={newBook.pageCount}
            onChange={(e) =>
              setNewBook({ ...newBook, pageCount: e.target.value })
            }
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="img">Изображение</label>
          <input
            type="text"
            id="img"
            value={newBook.img}
            onChange={(e) => setNewBook({ ...newBook, img: e.target.value })}
            required
          />
        </fieldset>

        <fieldset className="fieldset">
  <label htmlFor="country">Страна выпуска</label>
  <select name="country" id="country">
    <option value="">...</option>
    {book.country && book.country.map((element) => (
      <option key={element.id} value={element.id}>
        {element.name}
      </option>
    ))}
  </select>
</fieldset>

        <fieldset className="fieldset">
          <label htmlFor="janre">Жанр</label>
          <select name="janre" id="janre">
            <option value="">...</option>
            {book.janre.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="fieldset">
          <button type="submit">Добавить книгу</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateBook;
