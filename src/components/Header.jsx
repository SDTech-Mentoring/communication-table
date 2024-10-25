import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ChevronLeft } from "lucide-react";

const Header = () => {

  return (
    <header>
      <h1>TALKPAL</h1>
      <Link to="/">
        <button className="backButton">
          <ChevronLeft size={48} />
        </button>
      </Link>
    </header>
  );
};

export default Header;
