import ReactDOM from "react-dom";

import "./Sidedrawer.css";

const SideDrawer = ({ children }) => {
  let content = <aside className="side-drawer">{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
