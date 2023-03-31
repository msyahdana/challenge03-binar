import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import datas from "../data/data.json";
import ButtonAll from "./ButtonTodoList/ButtonAll";
import ButtonDone from "./ButtonTodoList/ButtonDone";
import ButtonTodo from "./ButtonTodoList/ButtonTodo";
import ButtonEdit from "./ButtonUpdate/ButtonEdit";
import ButtonDelete from "./ButtonUpdate/ButtonDelete";
import ButtonDeleteDone from "./ButtonDeleteDone";
import ButtonDeleteAll from "./ButtonDeleteAll";
import CheckboxList from "./ButtonUpdate/CheckboxList";

function TodoList({ search }) {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    setTodos(datas);
  }, []);

  //menampilkan semua list
  const sortAll = () => {
    setType("");
  };

  // menampilakn list yang selesai
  const sortDone = () => {
    setType("sortDone");
  };

  //menampilakn list yang belum selesai
  const sortTodo = () => {
    setType("sortTodo");
  };

  //menghapus semua list yang telah selesai
  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  //menghapus semua list
  const deleteAllTask = () => {
    setTodos([]);
  };

  //mengupdate menghapus list dan mencoret list ketika sudah selesai
  const updateList = (type, id) => {
    if (type === "done") {
      let check = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      setTodos(check);
    }
    if (type === "delete") {
      let del = todos.filter((todo) => todo.id !== id);
      setTodos(del);
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col md={4}>
            <ButtonAll
              onClick={() => {
                sortAll();
              }}
            />
          </Col>
          <Col md={4}>
            <ButtonDone
              onClick={() => {
                sortDone();
              }}
            />
          </Col>
          <Col md={4}>
            <ButtonTodo
              onClick={() => {
                sortTodo();
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row className="mx-auto">
          <Col>
            {todos &&
              type === "sortTodo" &&
              !search &&
              todos
                .filter((todo) => todo.complete === false)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="my-2">
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col>{data.complete ? <strike>{data.task}</strike> : <p>{data.task}</p>}</Col>
                              <Col className="d-flex justify-content-end">
                                <Stack direction="horizontal">
                                  <CheckboxList onclick={() => updateList("done", data.id)} />
                                  <ButtonEdit />
                                  <ButtonDelete onclick={() => updateList("delete", data.id)} />
                                </Stack>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              type === "" &&
              !search &&
              todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <Container className="my-2">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col>{todo.complete ? <strike>{todo.task}</strike> : <p>{todo.task}</p>}</Col>
                            <Col className="d-flex justify-content-end">
                              <Stack direction="horizontal">
                                <CheckboxList onclick={() => updateList("done", todo.id)} />
                                <ButtonEdit />
                                <ButtonDelete onclick={() => updateList("delete", todo.id)} />
                              </Stack>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Container>
                  </div>
                );
              })}
            {todos &&
              type === "sortDone" &&
              !search &&
              todos
                .filter((todo) => todo.complete === true)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="my-2">
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col>{data.task}</Col>
                              <Col className="d-flex justify-content-end">
                                <Stack direction="horizontal">
                                  <CheckboxList />
                                  <ButtonEdit />
                                  <ButtonDelete onclick={() => updateList("delete", data.id)} />
                                </Stack>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              search &&
              todos
                .filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()))
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="my-2">
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col> {data.complete ? <strike>{data.task}</strike> : <p>{data.task}</p>}</Col>
                              <Col className="d-flex justify-content-end">
                                <Stack direction="horizontal" gap={3}>
                                  <CheckboxList />
                                  <ButtonEdit />
                                  <ButtonDelete onclick={() => updateList("delete", data.id)} />
                                </Stack>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Container>
                    </div>
                  );
                })}
          </Col>
        </Row>
      </Container>
      <div>
        <Container className="mt-4 pb-5  ">
          <Row>
            <Col>
              <ButtonDeleteDone
                onClick={() => {
                  deleteDoneTask();
                }}
              />
            </Col>
            <Col>
              <ButtonDeleteAll
                onClick={() => {
                  deleteAllTask();
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TodoList;
