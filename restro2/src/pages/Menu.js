import React from "react";
import { Data } from "../Data/Data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function menu() {
  return (
    <div className="menu">
        <h1>OUR MENU</h1>
        
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default menu;
