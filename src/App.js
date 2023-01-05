import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Thing = () => {
  return <h1>this is a thing</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="thing" element={<Thing />} />
      </Route>
    </Routes>
  );
};

export default App;
