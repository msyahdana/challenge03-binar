import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ onClick }) {
  return (
    <>
      <Button onClick={onClick} className="w-100 fw-bold mb-2" variant="info">
        All
      </Button>
    </>
  );
}

export default ButtonAll;
