import React from "react";

const Pagination = ({page, setPage}) => {
  
  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
};

export default Pagination;
