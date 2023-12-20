import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import save from "../assets/icons/save.svg";
import { Context } from "..";
import saved from "../assets/icons/saved.png";
import { useHistory } from "react-router-dom";
import { ABOUTBOOK_ROUTE } from "../utilis/consts";

const BookItem = observer(({ book, onEdit }) => {
  const { book: bookStore } = useContext(Context);
  const history = useHistory();

  const handleToggleToRead = () => {
    bookStore.setToRead(book.id, !book.toRead);
  };

  return (
    <div
      className="main-card"
      onClick={() => history.push(ABOUTBOOK_ROUTE + "/" + book.id)}
    >
      <div className="main-card-left">
        <div className="main-film-img">
          <Image src={book.img} />
        </div>
        <div className="main-film-info">
          <a href="">{book.title}</a>
          <a href=""> {book.author}</a>
          <a href="">
            {book.pageCount}стр, {book.price}₸
          </a>

          <button className="main-card-info-button">
            <Image src="/images/icons/play.svg" alt="" />
            Читать
          </button>
        </div>
      </div>
      <div className="main-card-right">
        <button
          className="main-card-info-button text-center"
          style={{ padding: "10px" }}
        >
          Купить
        </button>

        {book.toRead ? (
          <button
            className="main-card-info-button"
            onClick={handleToggleToRead}
          >
            <Image
              className="main-card-info-button-img"
              src={saved}
              alt=""
              style={{ width: "15%", height: "20px" }}
            />
            Сохранено
          </button>
        ) : (
          <button
            className="main-card-info-button"
            onClick={handleToggleToRead}
          >
            <Image src={save} alt="" />
            Буду читать
          </button>
        )}
      </div>
    </div>
  );
});

export default BookItem;
