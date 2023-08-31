import { Route, Routes, useNavigate } from "react-router-dom";

import { useState } from "react";
import User from "./users/pages/User";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import NewPlace from "./places/pages/NewPlace";
import Auth from "./users/pages/Auth";
import AuthContext from "./shared/context/auth-context";
import Logout from "./users/pages/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/auth");
  };
  const login = () => {
    setIsLoggedIn(true);
    navigate("/");
  };
  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="places/:placeId" element={<UpdatePlace />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="/" element={<User />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />}></Route>
        <Route path="/logout" element={<User />}></Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<User />}></Route>

        <Route path="/:userId/places" element={<UserPlaces />}></Route>

        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <main>{routes}</main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
