import { useState, useEffect } from "react";

export const usePagination = (totalItems, initialPage = 1, itemsPerPage = 3) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPagesCount);

    if (currentPage > totalPagesCount) {
      setCurrentPage(totalPagesCount);
    }
  }, [totalItems, itemsPerPage, currentPage]);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return {
    pages,
    setCurrentPage,
  };
};
