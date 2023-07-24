import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

import Navbar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
