import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import User from "./users/pages/User";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import NewPlace from "./places/pages/NewPlace";
import Auth from "./users/pages/Auth";
import AuthContext from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    setIsLoggedIn(false);
  };
  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<User />}></Route>

            <Route path="/places/new" element={<NewPlace />}></Route>

            <Route path="/:userId/places" element={<UserPlaces />}></Route>

            <Route path="places/:placeId" element={<UpdatePlace />}></Route>

            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/logout" element={<User />}></Route>
          </Routes>
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
