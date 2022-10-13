import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Performance Assessment:<br />Creating and Adding Custom Components to React</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Page1">Dangerous Animal</NavLink></li>
            <li><NavLink to="/Page2">Second Page</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Page1" element={<Page1 />}/>
            <Route path="/Page2" element={<Page2 />}/>
          </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;