import React from "react";
import { Form } from "react-bootstrap";
function TextField({ onChange, value }) {
  return (
    <>
      <Form.Control type="Text" placeholder="Input/Edit ToDo" aria-label="Input/Edit ToDo" className="w-100" onChange={onChange} value={value} />
    </>
  );
}

export default TextField;
