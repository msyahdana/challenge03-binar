import React from "react";
import { Button } from "react-bootstrap";

function ButtonTodo({ onClick }) {
  return (
    <>
      <Button onClick={onClick} className="w-100 fw-bold " variant="info">
        Todo
      </Button>
    </>
  );
}

export default ButtonTodo;
