import React from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function PaginatedItems({ itemsPerPage, page, pageChange }) {
  // We start with an empty list of items.
  //   const [currentItems, setCurrentItems] = useState(null);
  //   const [pageCount, setPageCount] = useState(0);
  //   // Here we use item offsets; we could also use page offsets
  //   // following the API or data you're working with.
  //   const [itemOffset, setItemOffset] = useState(0);

  //   useEffect(() => {
  //     // Fetch items from another resources.
  //     const endOffset = itemOffset + itemsPerPage;
  //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //     setCurrentItems(items.slice(itemOffset, endOffset));
  //     setCurrentItems();
  //     setPageCount(Math.ceil(items.length / itemsPerPage));
  //   }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    pageChange();
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
