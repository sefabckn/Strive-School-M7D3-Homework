import "./App.css";

import Company from "./components/Company";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Favs from "./components/Favs";
import MyNavbar from './components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:company" element={<Company />}></Route>
          <Route path="/favorites" element={<Favs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
