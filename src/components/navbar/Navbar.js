import "./navbar.css";
import SearchBar from "../SearchBar";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "../../pages/About";
import { MovieStars } from "../../pages/MovieStars";
import { Error404 } from "../../pages/Error404";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="right">
          <SearchBar placeholder="Search a movie series..." />

          <div className="socialMedia">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
