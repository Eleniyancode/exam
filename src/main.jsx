import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ReactPaginate from "react-paginate";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import About from './components/about.jsx';
import AltschoolProfileTemplate from './components/altschoolProfileTemplate.jsx';
import Altschoolass from './components/altschoolass.jsx';
import Assignment from './components/assignment.jsx';
import Assignmenttwo from './components/assignmenttwo.jsx';
import BlogCard from './components/blog-card.jsx';
import Ethereum from './components/etherum.jsx';
import GitTest from './components/git-test.jsx';
import Huckelberry from './components/huckelberry.jsx';
import Testing from './components/testing.jsx';
import WebProject from './components/web-project.jsx';

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
      <Items key={crypto.randomUUID()} currentItems={currentItems} />
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
        <App />
      <PaginatedItems itemsPerPage={4} />
            </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
