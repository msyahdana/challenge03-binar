import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonAddNewTaks() {
  return (
    <>
      <Button className="w-100 fw-bold text-dark-emphasis mt-3" variant="info" as={Link} to="/InputTodo">
        Add new Task
      </Button>
    </>
  );
}

export default ButtonAddNewTaks;
