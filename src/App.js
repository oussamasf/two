import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SandBox from "./routes/sandbox/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sandbox" element={<SandBox />} />
      </Route>
    </Routes>
  );
};

export default App;
