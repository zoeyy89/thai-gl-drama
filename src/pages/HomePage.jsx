import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dramas from '../data/dramas.json'

const trailers = [
  {
    title: 'Girl Rules',
    url: 'https://www.youtube.com/embed/lDUD3omAlHA'
  },
  {
    title: 'Hometown Romance',
    url: 'https://www.youtube.com/embed/lPr4rjI52RI'
  },
  {
    title: 'The Air 4 Elements',
    url: 'https://www.youtube.com/embed/Jo8yWhGpzBw'
  }
]

// 配色方案
const colorSchemes = [
  // 冷色系
  { bg: '#1a1a2e', accent: '#e94560', text: '#ffffff', sub: '#a8a8b3' },
  { bg: '#0a2342', accent: '#4facde', text: '#ffffff', sub: '#8cb8d0' },
  { bg: '#0f2027', accent: '#00d2ff', text: '#ffffff', sub: '#7ecce0' },
  { bg: '#0d2137', accent: '#a998d1', text: '#ffffff', sub: '#9bacc4' },
  { bg: '#0a1628', accent: '#38b6ff', text: '#ffffff', sub: '#7ab8d4' },
  { bg: '#0d1b2a', accent: '#56cfe1', text: '#ffffff', sub: '#8ac8d4' },
  { bg: '#141852', accent: '#7b9cff', text: '#ffffff', sub: '#9aaee0' },
  { bg: '#0e2040', accent: '#00b4d8', text: '#ffffff', sub: '#6ab8cc' },

  // 暖色系
  { bg: '#1a0a00', accent: '#ff9a3c', text: '#ffffff', sub: '#d4956a' },
  { bg: '#1f0a0a', accent: '#ff6b6b', text: '#ffffff', sub: '#c98a8a' },
  { bg: '#2a1a00', accent: '#ffd166', text: '#ffffff', sub: '#d4b870' },
  { bg: '#1e0f00', accent: '#ff8c42', text: '#ffffff', sub: '#c47a50' },
  { bg: '#1a0d00', accent: '#ffba08', text: '#ffffff', sub: '#c49a30' },
  { bg: '#2d1515', accent: '#ff4d6d', text: '#ffffff', sub: '#c47878' },

  // 紫粉系
  { bg: '#1f1035', accent: '#ff6b9d', text: '#ffffff', sub: '#c9a8c0' },
  { bg: '#1a0d2e', accent: '#ff85a1', text: '#ffffff', sub: '#c49bb0' },
  { bg: '#1c1c1c', accent: '#fabba8', text: '#ffffff', sub: '#cccccc' },
  { bg: '#1a0a1e', accent: '#ff99cc', text: '#ffffff', sub: '#c490aa' },
  // 綠色系
  { bg: '#0d1f12', accent: '#a8e063', text: '#ffffff', sub: '#8bbc6e' },
  { bg: '#1a2a1a', accent: '#f9ca24', text: '#ffffff', sub: '#c9b86a' },
  { bg: '#0a2010', accent: '#00e676', text: '#ffffff', sub: '#60c488' },
  { bg: '#0f1e0f', accent: '#69f0ae', text: '#ffffff', sub: '#7ec49a' },

  // 特別款
  { bg: '#1a1a1a', accent: '#ffffff', text: '#ffffff', sub: '#aaaaaa' }, 
]

function HomePage() {
  const [activeTrailer, setActiveTrailer] = useState(0)
  const [scheme, setScheme] = useState(colorSchemes[0])

  // 進頁面時隨機選一套配色
  useEffect(() => {
    const random = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    setScheme(random)
  }, [])

  const upcoming = dramas.filter(d => d.year === 2026)
  const featured = dramas.filter(d => d.rating >= 8.5)

  return (
    <div style={{ padding: '32px 0' }}>

      {/* Hero 區 */}
      <div style={{
        background: scheme.bg,
        borderRadius: '24px',
        padding: '80px 48px',
        marginBottom: '48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.5s ease'
      }}>

        {/* 裝飾光暈 */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '350px', height: '350px', borderRadius: '50%',
          background: `radial-gradient(circle, ${scheme.accent}30 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', right: '-60px',
          width: '280px', height: '280px', borderRadius: '50%',
          background: `radial-gradient(circle, ${scheme.accent}20 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />

        {/* 小標籤 */}
        <div style={{
          display: 'inline-block',
          border: `1px solid ${scheme.accent}`,
          borderRadius: '999px',
          padding: '4px 16px',
          fontSize: '12px',
          color: scheme.accent,
          marginBottom: '24px',
          letterSpacing: '2px'
        }}>
          2022 – 2026 泰百筆記
        </div>

        {/* 主標題 */}
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: '900',
          color: scheme.text,
          margin: '0 0 8px',
          lineHeight: '1.1',
          letterSpacing: '-1px',
          animation: 'fadeSlideUp 0.8s ease forwards'
        }}>
          泰百一家親
        </h1>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: '900',
          margin: '0 0 24px',
          lineHeight: '1.1',
          letterSpacing: '-1px',
          color: scheme.accent,
          animation: 'fadeSlideUp 0.8s ease 0.2s both'
        }}>
          Thai GL Stole My Sleep
        </h1>

        {/* 副標題 */}
        <p style={{
          fontSize: '17px',
          color: scheme.sub,
          margin: '0 0 40px',
          animation: 'fadeSlideUp 0.8s ease 0.4s both'
        }}>
          關於泰百的網站，推薦我喜歡的劇集、CP和音樂
        </p>

        {/* 按鈕 */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeSlideUp 0.8s ease 0.6s both'
        }}>
          <Link to="/dramas" className="btn-hover" style={{
            background: scheme.accent,
            color: scheme.bg,
            borderRadius: '999px',
            padding: '14px 36px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: `0 4px 20px ${scheme.accent}40`,
            display: 'inline-block'
          }}>
            瀏覽劇集列表
          </Link>

          <Link to="/cp" className="btn-hover" style={{
            background: 'transparent',
            color: scheme.text,
            border: `2px solid ${scheme.text}50`,
            borderRadius: '999px',
            padding: '14px 36px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'inline-block'
          }}>
            認識 CP
          </Link>
        </div>

      </div>

      {/* 左7:右3 主體 */}
      <div className="home-layout" style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        {/* 左側 7 */}
        <div style={{ flex: 7 }}>

          {/* 2026 即將播出 */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ color: '#132c56', margin: '0' }}>🆕 2026 即將播出</h2>
              <Link to="/dramas" style={{ color: '#326fc3', fontSize: '14px', textDecoration: 'none' }}>
                查看全部 →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {upcoming.map(drama => (
                <div key={drama.id} style={{
                  background: '#f0f4ff',
                  border: '1px solid #326fc3',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <Link to={`/dramas/${drama.id}`} style={{ textDecoration: 'none' }}>
                      <p style={{ margin: '0 0 4px', color: '#132c56', fontWeight: 'bold', fontSize: '16px' }}>
                        {drama.fullTitle}
                      </p>
                    </Link>
                    <p style={{ margin: '0', color: '#888', fontSize: '13px' }}>
                      {drama.company || '出品公司待公布'}
                    </p>
                  </div>
                  {drama.cp.length > 0 && (
                    <span style={{
                      background: 'white',
                      border: '1px solid #326fc3',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      fontSize: '13px',
                      color: '#326fc3'
                    }}>
                      {drama.cp.map(c => c.name).join(' · ')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 精選推薦 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ color: '#132c56', margin: '0' }}>⭐ 精選推薦</h2>
              <span style={{ color: '#888', fontSize: '14px' }}>評分 8.5 以上</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {featured.map(drama => (
                <div key={drama.id} style={{
                  background: '#fff5f3',
                  border: '1px solid #fabba8',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <Link to={`/dramas/${drama.id}`} style={{ textDecoration: 'none' }}>
                      <p style={{ margin: '0 0 4px', color: '#132c56', fontWeight: 'bold', fontSize: '16px' }}>
                        {drama.fullTitle}
                      </p>
                    </Link>
                    <p style={{ margin: '0', color: '#888', fontSize: '13px' }}>
                      {drama.year} · {drama.tags.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                  <span style={{
                    background: 'white',
                    border: '1px solid #fabba8',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '14px',
                    color: '#132c56',
                    fontWeight: 'bold'
                  }}>
                    ⭐ {drama.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 右側 3 */}
        <div className="home-sidebar" style={{
          flex: 3,
          position: 'sticky',
          top: '24px'
        }}>
          <h2 style={{ color: '#132c56', margin: '0 0 16px' }}>🎬 精選預告</h2>

          {/* YouTube iframe */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
            <iframe
              width="100%"
              height="320"
              src={trailers[activeTrailer].url}
              title={trailers[activeTrailer].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 切換按鈕 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {trailers.map((trailer, i) => (
              <button
                key={i}
                onClick={() => setActiveTrailer(i)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: '1px solid #fabba8',
                  background: activeTrailer === i ? '#fabba8' : 'white',
                  color: activeTrailer === i ? 'white' : '#132c56',
                  cursor: 'pointer',
                  fontSize: '13px',
                  textAlign: 'left',
                  fontWeight: activeTrailer === i ? 'bold' : 'normal'
                }}
              >
                {activeTrailer === i ? '▶ ' : '　'}{trailer.title}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Spotify 歌單 */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ color: '#132c56', margin: '0 0 16px' }}>🎵 追劇必聽歌單</h2>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/3vvHy61UFTcRLkmMCNzEnS?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

    </div>
  )
}

export default HomePage