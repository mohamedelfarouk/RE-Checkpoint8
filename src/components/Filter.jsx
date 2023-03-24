import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";

const Filter = ({
  handleFilterT,
  handleFilterR,
  setSearchTextR,
  setSearchTextT,
  searchTextR,
  searchTextT,
}) => {
  const handleSearchRating = () => {
    handleFilterR(searchTextR);
  };

  const handleSearchTitle = () => {
    handleFilterT(searchTextT);
  };

  return (
    <>
      <InputGroup className="mb-3" style={{ maxWidth: "50%" }}>
        <Form.Control
          placeholder="Search by title"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchTextT}
          onChange={(e) => {
            setSearchTextT(e.target.value);
          }}
        />
        {/* <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearchTitle}
        >
          Search by Title
        </Button> */}
        <Form.Control
          placeholder="Search by rating"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchTextR}
          onChange={(e) => {
            setSearchTextR(e.target.value);
          }}
        />
        {/* <Button
          variant="outline-secondary"
          id="button-addon3"
          onClick={handleSearchRating}
        >
          Search by Rating
        </Button> */}
      </InputGroup>
    </>
  );
};

export default Filter;
