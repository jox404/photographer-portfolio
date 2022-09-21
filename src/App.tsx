import "./App.css";
import { NavBar } from "./components/NavBar";
import Routes from "./routes";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes />
      </div>
    </>
  );
}

export default App;
