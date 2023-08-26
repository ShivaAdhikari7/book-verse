import { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UI/Backdrop";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      {isDrawerOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <nav className="main-navigation_drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation_menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">PlacePulse</Link>
        </h1>
        <nav className="main-navigation_header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};
export default MainNavigation;
