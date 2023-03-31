import React from "react";
import { Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
function ButtonDelete({ onclick }) {
  return (
    <Button variant="outline-danger" size="sm" onClick={onclick}>
      <Trash3Fill />
    </Button>
  );
}

export default ButtonDelete;
