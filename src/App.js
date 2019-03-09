import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Asians from "./pages/Asians";
import Blonds from "./pages/Blonds";
import Latinas from "./pages/Latinas";

export default () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/asians/" component={Asians} />
      <Route path="/blonds/" component={Blonds} />
      <Route path="/latinas/" component={Latinas} />
    </div>
  </Router>
);
