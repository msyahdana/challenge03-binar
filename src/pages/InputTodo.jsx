import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
import TextField from "../components/TextField";
import ButtonSubmit from "../components/ButtonSubmit";

function TodoInput() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  //mendapatkan data baru dari inputan
  const onSubmit = (event) => {
    event.preventDefault();

    const taskLength = data.length;
    data.push({
      id: taskLength + 1,
      task,
      complete: false,
    });

    return navigate("/");
  };

  return (
    <>
      <div className="text-center">
        <h1>TodoInput</h1>
      </div>
      <Container className="square border rounded p-4">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <TextField value={task} onChange={(e) => setTask(e.target.value)} />
                {task.length < 1 && <Form.Text className="text-muted">Enter the task</Form.Text>}
              </Form.Group>
              <div className="d-grid gap-2">
                <ButtonSubmit />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoInput;
