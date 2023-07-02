import "./App.css";
import React,{useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import InvalidRoute from "./page/InvalidePage";
import Login from "./page/Login";
import SideMenu from "./component/menu/SideMenu";

function App() {
const [toggle,setToggle]=useState(false)

const handleToggle=()=> setToggle(!toggle)
// const handleCallback=(response)=>{

// }

// useEffect(()=>{
//   /*global google */
// window.google.accounts.id.initialize({
//   client_id:'666341212747-6uj58jpfvf5ldm1og8gpj5csa21jtrl3.apps.googleusercontent.com',
//   callback:handleCallback
// })
// window.google.accounts.id.renderButton(
//   document.getElementById('gsignin'),
//   {theme:'outline',size:'medium'}
//   )
//   window.google.accounts.id.prompt()

// },[])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/:username" element={<SideMenu handleToggle={handleToggle} toggle={toggle} />} >
          <Route index element={<Dashboard  handleToggle={handleToggle}/>} />
          </Route>
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
