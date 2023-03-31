import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTodo from "./pages/HomeTodo";
import InputTodo from "./pages/InputTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTodo />} />
        <Route path="/InputTodo" element={<InputTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
