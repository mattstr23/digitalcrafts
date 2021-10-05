import DealerShip from "./components/dealership/Dealership";
import NeighborHood from "./components/neighborhood/Neighborhood";
import "./App.css"

function App() {
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <NeighborHood/>
      <DealerShip/>

    </div>
  );
}

export default App;
