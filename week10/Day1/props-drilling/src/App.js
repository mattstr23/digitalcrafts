import DealerShip from "./components/dealership/Dealership";
import NeighborHood from "./components/neighborhood/Neighborhood";
import "./App.css";

function App() {
  const mustang = "1967 Mustang Boss 302";
  const fordGT = "2021 Ford GT";
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <NeighborHood mustang={mustang} fordGT={fordGT} />
      <DealerShip mustang={mustang} fordGT={fordGT} />
    </div>
  );
}

export default App;
