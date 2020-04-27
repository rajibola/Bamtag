import React from "react";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="hero">
      <div>
        <div className="head">Explore</div>
        <div className="lists">
          <ul>
            <li className="list">
              <span>
                <img
                  alt="pics1"
                  src="https://img.icons8.com/color/24/000000/detective-hat.png"
                />{" "}
              </span>{" "}
              Shoes
            </li>
            <li className="list">
              <span>
                <img
                  alt="pics2"
                  src="https://img.icons8.com/color/27/000000/jeans-jacket.png"
                />{" "}
              </span>{" "}
              Gadget
            </li>
            <li className="list">
              <span>
                {" "}
                <img
                  alt="pics3"
                  src="https://img.icons8.com/officel/24/000000/jeans.png"
                />{" "}
              </span>{" "}
              Trouser
            </li>
            <li className="list">
              <span>
                <img
                  alt="pics4"
                  src="https://img.icons8.com/dusk/24/000000/sneakers.png"
                />{" "}
              </span>{" "}
              Shoes
            </li>
            <li className="list">
              <span>
                <img
                  alt="pics5"
                  src="https://img.icons8.com/plasticine/35/000000/standing-man.png"
                />{" "}
              </span>{" "}
              Mens
            </li>
            <li className="list">
              <span>
                <img
                  alt="pics6"
                  src="https://img.icons8.com/color/35/000000/standing-woman.png"
                />{" "}
              </span>{" "}
              Womens
            </li>
          </ul>
        </div>
        <div className="help">
          <img
            alt="pics7"
            src="https://img.icons8.com/material-sharp/23/000000/comments.png"
          />
          Help Center
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
