// Navbar.jsx — 導覽列元件，每個頁面都會顯示
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_gray.png'

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Thai GL Stole My Sleep" height="50" />
      </Link>
      <Link to="/dramas">劇集列表</Link>
      <Link to="/cp">CP介紹</Link>
      <Link to="/favorites">我的收藏</Link>
    </nav>
  )
}

export default Navbar