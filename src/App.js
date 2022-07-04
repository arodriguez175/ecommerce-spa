import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";

function App() {
  return (
    <div className="App">
      <div>
        <Men />
        <Women />
      </div>
    </div>
  );
}

export default App;
