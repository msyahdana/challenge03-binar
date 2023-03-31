import React from "react";
import { Button } from "react-bootstrap";
function ButtonDone({ onClick }) {
  return (
    <>
      <Button onClick={onClick} className="w-100 fw-bold mb-2" variant="info">
        Done
      </Button>
    </>
  );
}

export default ButtonDone;
