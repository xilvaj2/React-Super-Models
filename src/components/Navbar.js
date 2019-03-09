import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/">Super Models</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/asians">Asians</Link>
        </li>
        <li>
          <Link to="/blonds">Blonds</Link>
        </li>
        <li>
          <Link to="/latinas">Latinas</Link>
        </li>
      </ul>
    </div>
  </nav>
);
