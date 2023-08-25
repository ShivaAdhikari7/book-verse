import ReactDOM from "react-dom";

import "./Sidedrawer.css";

const SideDrawer = ({ children, onClick }) => {
  let content = (
    <aside className="side-drawer" onClick={onClick}>
      {children}
    </aside>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
