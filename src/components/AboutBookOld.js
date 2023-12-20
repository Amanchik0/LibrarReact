import React, { useContext, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Context } from "../index";
import { useParams } from "react-router-dom";
import Coment from "../components/Coment";

const AboutBooks = () => {
  const { book } = useContext(Context);
  
  const { id } = useParams();
  const bookId = parseInt(id);

  useEffect(() => {
    console.log("Компонент монтируется или id изменяется");

    return () => {
      console.log("Компонент размонтируется или id изменяется");
    };
  }, [id]);

  const currentBook = book.book.find((book) => book.id === bookId);

  if (!currentBook) {
    return <div>Loading...</div>;
  }

  const handleToggleToRead = () => {
    book.setToRead(bookId, !currentBook.toRead);
  };

  return (
    <Container className="mt-3">
      <div className="main-detail">
        <div className="detail">
          <div className="main-film-image">
            <Image src={currentBook.img} />
          </div>
          <div className="main-film-info-detail">
            <h2>
              {currentBook.title}, {currentBook.year}{" "}
            </h2>
            <p>{currentBook.title}</p>
            {currentBook.toRead ? (
              <button
                className="main-card-info-button"
                onClick={handleToggleToRead}
              >
                <img
                  className="main-card-info-button-img"
                  src="/images/icons/saved.png"
                  alt=""
                  style={{ width: "15%" }}
                />
                Сохранено
              </button>
            ) : (
              <button
                className="main-card-info-button"
                onClick={handleToggleToRead}
              >
                <img src="/images/icons/save.svg" alt="" />
                Буду читать
              </button>
            )}
            <h4>О фильме </h4>
            <div className="main-film-details">
              <p>Title</p>
              <p>{currentBook.title}</p>
            </div>
            <div className="main-film-details">
              <p>Price</p>
              <p>{currentBook.price}</p>
            </div>
            <div className="main-film-details">
              <p>Author</p>
              <p>{currentBook.author}</p>
            </div>
            <div className="main-film-details">
              <p>Page Count</p>
              <p>{currentBook.pageCount}</p>
            </div>
            <div className="main-film-details">
              <p>Country</p>
              <p>{currentBook.country?.name || "N/A"}</p>
            </div>
            <div className="main-film-details">
              <p>Janre</p>
              <p>{currentBook.janre?.name || "N/A"}</p>
            </div>
          </div>
        </div>
        <Coment bookId={bookId} />
      </div>
    </Container>
  );
};

export default AboutBooks;
