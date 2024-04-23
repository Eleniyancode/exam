import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import ReactPaginate from "react-paginate";
import About from "./repos/about.jsx";
import AltschoolProfileTemplate from "./repos/altschoolProfileTemplate.jsx";
import Altschoolass from "./repos/altschoolass.jsx";
import Assignment from "./repos/assignment.jsx";
import Assignmenttwo from "./repos/assignmenttwo.jsx";
import BlogCard from "./repos/blog-card.jsx";
import Ethereum from "./repos/etherum.jsx";
import GitTest from "./repos/git-test.jsx";
import Huckelberry from "./repos/huckelberry.jsx";
import Testing from "./repos/testing.jsx";
import WebProject from "./repos/web-project.jsx";
import { BrowserRouter } from "react-router-dom";
// Example items, to simulate fetching from another resources.
const items = [
  <About />,
  <AltschoolProfileTemplate />,
  <Altschoolass />,
  <Assignment />,
  <Assignmenttwo />,
  <BlogCard />,
  <Ethereum />,
  <GitTest />,
  <Huckelberry />,
  <Testing />,
  <WebProject />,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="itemcontainer">
            <h3 className="item">{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the component rendered.


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
      <PaginatedItems itemsPerPage={4} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
