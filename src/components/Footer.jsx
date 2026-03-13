import logo from '../assets/logo_white_chinese.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      marginTop: '64px',
      padding: '32px 48px',
      background: '#132c56',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px'
    }}>
      {/* Logo */}
      <img src={logo} alt="Thai GL Stole My Sleep" style={{ height: '60px' }} />

      {/* 文字 */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#fabba8' }}>
          泰百一家親 | Thai GL Stole My Sleep
        </p>
        <p style={{ margin: '0', fontSize: '12px', color: '#ffffff' }}>
          從 2025 – {currentYear} ，zoeyy 邊寫論文邊看泰百
        </p>
      </div>
    </footer>
  )
}

export default Footer