import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import { Outlet } from "react-router-dom";

const Thing = () => {
  return (
    <div>
      <div>
        <h1>this is a NAVBAR</h1>;
      </div>
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Thing />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
