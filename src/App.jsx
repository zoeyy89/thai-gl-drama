import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DramaList from './pages/DramaList'
import DramaDetail from './pages/DramaDetail'
import CPPage from './pages/CPPage'
import CPDetail from './pages/CPDetail'      
import FavoritePage from './pages/FavoritePage'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter basename="/thai-gl-drama/">
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ padding: '0 48px', flex: 1 }}>  {/* ← 加 flex: 1 */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dramas" element={<DramaList />} />
            <Route path="/dramas/:id" element={<DramaDetail />} />
            <Route path="/cp" element={<CPPage />} />
            <Route path="/cp/:cpName" element={<CPDetail />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App