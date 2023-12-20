import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";
import "./count.css";

const BookBar = observer(() => {
  const { book } = useContext(Context);

  return (
    <div className="countryDiv">
      {book.country.map((country) => (
        <Card
          style={{ cursor: "pointer" }}
          key={book.id}
          className="p-3 cardMl"
          onClick={() => book.setSelectedCountry(country)}
          border={country.id === book.selectedCountry.id ? "danger" : "light"}
        >
          {country.name}
        </Card>
      ))}
    </div>
  );
});

export default BookBar;
