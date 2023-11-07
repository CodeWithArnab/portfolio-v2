import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="sidebarContainer">
      </div>
        <Sidebar />
      <div className="wrapper">
        <span>Arnab Debnath</span>
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnab-debnath-46a462215/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://leetcode.com/arnab_2002/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/CodeWithArnab">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
