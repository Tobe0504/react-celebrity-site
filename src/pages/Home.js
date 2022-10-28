import { Navbar } from "../components/navbar/Navbar"
import { HeroSection } from "../components/heroSection/HeroSection"
import { useState, useEffect } from "react"
import "./home.css"
import { Pagination } from "../components/Pagination"
import * as ReactBootStrap from "react-bootstrap"
import { ErrorBoundary } from "react-error-boundary"
import { Fallback } from "../components/Fallback"

const Home = () => {

  
  const [users, setUsers] = useState([])
  const [searchResults, setSearchResults] = useState([])

  //for pagination purposes
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  //for loading purposes
  const [loading, setLoading] = useState(false)
  
  //fetch API routes from randomuser.me using JSON
  useEffect(() => {
    setLoading(true)
    fetch('https://randomuser.me/api/?results=100')
    .then((response) => response.json())
    .then((userData) => setUsers(userData.results))
    .then(json =>{
      setSearchResults(json)
    })
  }, [])

  //for number of users per pageCount
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = users.slice(firstPostIndex, lastPostIndex)

  //for maping user profiles
  const mapUsers = () => {
    return currentPosts.map(user => 
      <div className="profiles">

        <img src={user.picture.large} alt="user.login.username"/>
        <h4>{user.login.username.toUpperCase() }</h4>
        <p>{user.email}</p>
        <h6>{user.gender.toUpperCase()}</h6>
      </div>
      )
  }

  // for ErrorBoundary
  const errorHandler = (error, errorInfo) => {
    // console.log("Logging", error, errorInfo)
  }
  
  return (

    <div className="home">
          {loading ? Home : <ReactBootStrap.Spinner animation='border' />}

   <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
    {/* Navbar component */}
        <Navbar />

    {/* HeroSection component */}
        <HeroSection />

    {/* logoSection */}
        <div className="logoSection">
          <img src="./images/hulu.svg" alt="" />
          <img src="./images/HBO.svg" alt="" />
          <img src="./images/netflix.svg" alt="" />
          <img src="./images/disney.svg" alt="" />
          <img src="./images/primeVideo.svg" alt="" />
        </div>

    {/* movieSection */}
        <div className="movieSection">
          <h3>100 Most Popular Movie Stars</h3>
          <h6>Discover the Top, Most popular Movies Stars available now! Across theatres, streaming and on-demand</h6>
        </div>
        

      {/* UserProfile section */}
        <div id="user-grid">
          {mapUsers()}
    
      {/* Loading state */}
          {loading ? mapUsers : <ReactBootStrap.Spinner animation='border' />}
        </div>

      {/* Pagination */}
          <Pagination 
          totalPosts={users.length} 
          postsPerPage={postsPerPage} 
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
  </ErrorBoundary> 
        
      {/* footerSection */}
        <div className="footerSection">
          <p>© 2022 Peluboy. All Right Reserved</p>
          <img src="./images/altschool.svg" alt="" />
        </div>

    </div>
  )
}

export default Home