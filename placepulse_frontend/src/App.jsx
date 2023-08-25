import { Route, Routes } from "react-router-dom";

import User from "./users/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/:userId/places" element={<UserPlaces />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
