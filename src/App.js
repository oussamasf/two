import { useState, useEffect } from "react";
import Title from "./components/title/title.component";
import Head from "./components/head/head.component";
import Row from "./components/row/row.component";
import "./app.style.css";
import { data } from "./constants";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [stocked, setStoked] = useState(false);
  const [filteredData, setFilterdData] = useState(data);

  const searchHandler = (event) => {
    return setSearchString(event.target.value.toLowerCase());
  };
  let last = "";
  let compo = [];

  useEffect(() => {
    const newFilteredlist = data.filter((el) => {
      return el.name.toLocaleLowerCase().includes(searchString);
    });
    setFilterdData(newFilteredlist);
  }, [searchString]);

  filteredData.forEach((el) => {
    if (last !== el.category) {
      last = el.category;
      compo.push(<Title category={last} />);
    }
    if (!stocked || el.stocked)
      compo.push(
        <Row
          name={el.name}
          price={el.price}
          bo={{ red: el.stocked, display: stocked }}
        />
      );
  });
  return (
    <div className="main">
      <input type="search" placeholder="search.." onChange={searchHandler} />
      <div style={{ display: "flex" }}>
        <p>available</p>
        <input
          type="checkbox"
          onChange={(event) => {
            setStoked(event.target.checked);
          }}
        />
      </div>
      <Head />
      {compo}
    </div>
  );
};

export default App;
