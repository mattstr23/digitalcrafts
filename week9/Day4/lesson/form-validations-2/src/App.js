import { MainDiv } from "./AppStyle";
import Form from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDiv>
        <Sidebar />
        <Form />
      </MainDiv>
    </div>
  );
}

export default App;
