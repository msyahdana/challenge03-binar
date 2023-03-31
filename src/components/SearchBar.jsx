import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function SearchBar({ value, onChange }) {
  return (
    <>
      <InputGroup>
        <InputGroup.Text className="bg-info">
          <Search />
        </InputGroup.Text>
        <Form.Control type="search" placeholder="Search Todo" aria-label="Search" onChange={onChange} value={value} />
      </InputGroup>
    </>
  );
}

export default SearchBar;
