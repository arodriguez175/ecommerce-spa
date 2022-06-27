import Header from "./components/header/Header";
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
