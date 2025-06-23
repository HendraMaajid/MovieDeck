/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </MovieProvider>
  )
}



export default App
