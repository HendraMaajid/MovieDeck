/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
import About from './pages/About';
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </MovieProvider>
  )
}



export default App
