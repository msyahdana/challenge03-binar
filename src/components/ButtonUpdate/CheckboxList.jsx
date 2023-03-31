import React from "react";
import { Button } from "react-bootstrap";

function CheckboxList({ onclick, check }) {
  return (
    <Button variant="outline-success" size="sm" onClick={onclick}>
      Check
    </Button>
  );
}

export default CheckboxList;
