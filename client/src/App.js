import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //use all of it i dont need to go to the index.js
import Home from "./components/Home";
import Login from "./components/LoginAndRegi/Login";
import Regi from "./components/LoginAndRegi/Registr";
import CreateUjTodo from "./components/CreateTodo/CreateUjTodo";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Regi />} />
          <Route path="/create" exact element={<CreateUjTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
