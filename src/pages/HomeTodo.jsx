import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import ButtonSearch from "../components/ButtonTodoSearch/ButtonSearch";
import ButtonAddNewTaks from "../components/ButtonTodoSearch/ButtonAddNewTaks";
import TodoList from "../components/TodoList";

function HomeTodo() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4">TodoSearch</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="my-2 p-2">
            <Card.Body>
              <Form>
                <Row>
                  <Col md={8}>
                    <Form.Group>
                      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-between  ">
                  <Col md={8}>
                    <ButtonSearch />
                  </Col>
                  <Col md={4}>
                    <ButtonAddNewTaks />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h1 className="text-center mt-4">TodoList</h1>
      <Row className="mb-5">
        <TodoList search={search} />
      </Row>
    </Container>
  );
}

export default HomeTodo;
