import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Event from "./Event";
import Support from "./Support";
import Forgot from "./Forgot";
import Sign from "./Sign";
import Login from "./Login";
import Gallery from "./Gallery";
import Home from "./Home";
import Upload from "./Upload";
import Map from "./Map";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/event" element={<Event />} />
          <Route path="/support" element={<Support />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/forget" element={<Forgot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
