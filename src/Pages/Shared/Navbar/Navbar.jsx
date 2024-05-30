import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const [showMenu, setShowMenu] = useState(false);
  //   const toggleMenu = () => {
  //     setShowMenu(true);
  //   };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link>Product</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="bg-nav">
      <div className="max-w-[1250px] mx-auto">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="text-white" id="menulist">
            {navLink}
          </ul>
          <div className="menu-icon">
            {/* <h1 onClick={toggleMenu()}>hamIcon</h1> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
