import React from 'react'
import './SearchBar.css'
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({ placeholder, data }) {
  const [users, setUsers] = useState([])

  // const SearchBar = ({ users, setSearchResults }) => {

  //   const handleSubmit = (e) => e.preventDefault
  //   const handleSearchChange = (e) => {
  //     if(!e.target.value) return setSearchResults(users)

  //     const resultsArray = users.filter(user => user.login.username.include(e.target.value))

  //     setSearchResults(resultsArray)
  //   }  
  

 
 const [searchUsername, setSearchUsername] = useState("")
//  console.log(users.filter(user.login.username.include("fe")))

  return (

    // <form className='search' onSubmit={handleSubmit}>
    //   <input className='search_input' type='text' id='search' onChange={handleSearchChange} />
    // </form>

    <div className='search'>
      <div className='searchInput'>
        {/* <input type='text' placeholder={placeholder} onChange={handleSearchChange}/> */}
        <input type='text' placeholder={placeholder} onChange={(e) => setSearchUsername(e.target.value)}/>

        {/* {currentPosts.filter((val) => {
          if (searchUsername == "") {
            
          } else {
            
          }
        })
          
        } */}
{/* 
      currentPosts.filter((value) => {
          if(searchUsername == "") {
            return value
          } else if(value.username.toUpperCase().include(searchUsername.toUpperCase())){
            return value
          }
        }) */}

        <div className='searchIcon'>
            <SearchIcon />
        </div>
      </div>
      <div className='dataResult'></div>
    </div>
  )
}


export default SearchBar
