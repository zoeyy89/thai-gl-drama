import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DramaList from './pages/DramaList'
import DramaDetail from './pages/DramaDetail'
import CPPage from './pages/CPPage'
import CPDetail from './pages/CPDetail'      
import FavoritePage from './pages/FavoritePage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '0 48px' }}>  {/* ← 加這個 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dramas" element={<DramaList />} />
          <Route path="/dramas/:id" element={<DramaDetail />} />
          <Route path="/cp" element={<CPPage />} />
          <Route path="/cp/:cpName" element={<CPDetail />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App