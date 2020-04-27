import React, { Component } from "react";
import "./searchbar.styles.scss";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <form className="newForm">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            required
          />
          <button className="button" type="button" value="Search">
            <i class="fas fa-search"></i>{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
