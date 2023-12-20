import React, { useContext, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { usePagination } from "./usePagination";
import { Context } from "../index";

const Pages = observer(() => {
  const { book } = useContext(Context);
  const { pages, setCurrentPage } = usePagination(book.totalCount, book.page);

  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === book.page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
