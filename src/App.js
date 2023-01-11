import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Auth from "./routes/authentication/auth.component";
import SandBox from "./routes/sandbox/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="sandbox" element={<SandBox />} />
      </Route>
    </Routes>
  );
};

export default App;
