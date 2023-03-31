import React from "react";
import { Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
function ButtonEdit() {
  return (
    <Button variant="outline-warning" size="sm" className="mx-2">
      <PencilFill />
    </Button>
  );
}

export default ButtonEdit;
