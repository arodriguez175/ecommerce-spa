import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import { Route, Navlink, HashRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
