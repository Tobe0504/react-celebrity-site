import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { MovieStars } from "./pages/MovieStars";
import Hompage from "./pages/Hompage";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((userData) => setUsers(userData.results))
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    // <Home />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              setUsers={setUsers}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/moviestars"
          element={
            <MovieStars
              users={users}
              setUsers={setUsers}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
