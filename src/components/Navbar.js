import React, { Component } from "react";
import NavData from "./NavData";

class Navbar extends Component {
  // States
  state = {
    clicked: false,
  };

  // Handlers
  clickedHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    // Destructuring states
    const { clicked } = this.state;
    return (
      <nav>
        <div class="logo">
          <h4>Navbar</h4>
        </div>
        <ul className={clicked ? "nav__links active" : "nav__links"}>
          {NavData.map((item, index) => {
            return (
              <li key={index}>
                <a className="nav__link" href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <i
          onClick={this.clickedHandler}
          className={clicked ? "btn fas fa-times" : "btn fas fa-bars"}
        ></i>
      </nav>
    );
  }
}

export default Navbar;
