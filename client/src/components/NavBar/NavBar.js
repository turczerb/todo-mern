import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import LoginAndRegi from "./LoginAndReg";
const NavBar = () => {
  //linkto linkeket majd ujra jell írni

  return (
    <div>
      <div>MyToDo</div>
      <div>
        <Link to="/login">My todoList</Link>
        <Link to="/login">New todoList</Link>
      </div>

      <div>
        <LoginAndRegi />
      </div>
    </div>
  );
};

export default NavBar;
