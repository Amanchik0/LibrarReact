import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { book } = useContext(Context);

  return (
    <div className="main-categories">
      <h3>Жанры</h3>
      <ListGroup>
        {book.janre.map((janre) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={janre.id === book.selectedType?.id}
            onClick={() => book.setSelectedType(janre)}
            key={janre.id}
          >
            {janre.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
