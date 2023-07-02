import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import InvalidRoute from "./page/InvalidePage";
import Login from "./page/Login";
import SideMenu from "./component/menu/SideMenu";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/:username"
            element={<SideMenu handleToggle={handleToggle} toggle={toggle} />}
          >
            <Route index element={<Dashboard handleToggle={handleToggle} />} />
          </Route>
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
