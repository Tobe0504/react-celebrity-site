import React from 'react'
import SearchBar from '../components/SearchBar'
import {useState, useEffect} from 'react'
import {Navbar} from "../components/navbar/Navbar"

export const MovieStars = () => {

  const [users, setUsers] = useState([])
  const [searchResults, setSearchResults] = useState([])

  return (

    <div className='container'>
      <h4>All Movie Stars</h4>
      <SearchBar />
      </div>
  )
  }
