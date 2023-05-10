import React from "react";
import { GrSearch } from "react-icons/gr";

import "./styles.css";

export const Header = () => {
  return (
    <div className="container">
      <input type="search" />
      <GrSearch />
    </div>
  );
};
