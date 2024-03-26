import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import LoginAndRegi from "./LoginAndReg";
const NavBar = () => {
  return (
    <div>
      szentséges navbárunk
      <div>
        <LoginAndRegi />
      </div>
    </div>
  );
};

export default NavBar;
