import React from "react";
import { Button } from "react-bootstrap";

function ButtonDeleteAll({ onClick }) {
  return (
    <>
      <Button variant="danger" className="w-100" onClick={onClick}>
        Delete All tasks
      </Button>
      ;
    </>
  );
}

export default ButtonDeleteAll;
