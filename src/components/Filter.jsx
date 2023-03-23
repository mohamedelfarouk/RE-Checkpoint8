import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const Filter = ({ handleFilterT, handleFilterR }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchRating = () => {
    handleFilterR(searchText);
  };

  const handleSearchTitle = () => {
    handleFilterT(searchText);
  };

  return (
    <>
      <InputGroup className="mb-3" style={{ maxWidth: "50%" }}>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearchTitle}
        >
          Search by Title
        </Button>
        <Button
          variant="outline-secondary"
          id="button-addon3"
          onClick={handleSearchRating}
        >
          Search by Rating
        </Button>
      </InputGroup>
    </>
  );
};

export default Filter;
