import React from "react";
import Social from "./Social";

export default function Header() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-sm bg-light fixed-top  ">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="./">
              Cole Cramer
            </a>
          </li>
        </ul>
        <br></br>
      </nav>

      <nav class="navbar navbar-expand-sm justify-content-center fixed-bottom bg-light ">
        <ul class="navbar-nav">
          <Social />
        </ul>
      </nav>
    </React.Fragment>
  );
}
