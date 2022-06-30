import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="pt-6 px-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
