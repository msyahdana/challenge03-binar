import React from "react";
import { Button } from "react-bootstrap";
function ButtonDeleteDone({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="danger" className="w-100">
        Delete done tasks
      </Button>
      ;
    </>
  );
}

export default ButtonDeleteDone;
