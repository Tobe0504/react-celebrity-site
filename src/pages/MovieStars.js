import React from "react";
import classes from "./MovieStar.module.css";
import * as ReactBootStrap from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Pagination } from "../components/Pagination";

export const MovieStars = ({ users, setUsers, loading, setLoading }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  const mapUsers = () => {
    return currentPosts.map((user) => (
      <div className={classes.profiles}>
        <img src={user.picture.large} alt="user.login.username" />
        <h4>{user.login.username.toUpperCase()}</h4>
        <p>{user.email}</p>
        <h6>{user.gender.toUpperCase()}</h6>
      </div>
    ));
  };

  return (
    <div className={classes.container}>
      <Navbar />
      <h4>All Movie Stars</h4>

      <div id="user-grid" className={classes.userGrid}>
        {mapUsers()}

        {/* Loading state */}
        {loading ? mapUsers : <ReactBootStrap.Spinner animation="border" />}
      </div>

      <div className={classes.pagination}>
        <Pagination
          totalPosts={users.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="footerSection">
        <p>© 2022 Peluboy. All Right Reserved</p>
        <img src="./images/altschool.svg" alt="" />
      </div>
    </div>
  );
};
