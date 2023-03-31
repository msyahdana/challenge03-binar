import React from "react";
import { Button } from "react-bootstrap";

function ButtonDelete({ onclick }) {
  return (
    <Button variant="outline-danger" size="sm" onClick={onclick}>
      Delete
    </Button>
  );
}

export default ButtonDelete;
