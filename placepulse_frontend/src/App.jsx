import { Route, Routes } from "react-router-dom";

import User from "./users/pages/User";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="/:userId/places" element={<UserPlaces />}></Route>
          <Route path="places/:placeId" element={<UpdatePlace />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
