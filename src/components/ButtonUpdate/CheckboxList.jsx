import React from "react";
import { Button } from "react-bootstrap";
import { CheckLg } from "react-bootstrap-icons";
function CheckboxList({ onclick, check }) {
  return (
    <Button variant="outline-success" size="sm" onClick={onclick}>
      <CheckLg />
    </Button>
  );
}

export default CheckboxList;
