import "./app.style.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import { lorem } from "./constants";

const App = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="paragraph">
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
      </div>
    </div>
  );
};

export default App;
