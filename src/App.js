import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/About';
import Home from './pages/Home';
import { MovieStars } from './pages/MovieStars';
import Hompage from './pages/Hompage';

function App() {
  return (

    // <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = 'moviestars' element={ <MovieStars/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
