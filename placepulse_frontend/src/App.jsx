import { Route, Routes } from "react-router-dom";

import User from "./users/pages/User";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<User />}></Route>
      <Route path="/places/new" element={<NewPlace />}></Route>
    </Routes>
  );
}

export default App;
