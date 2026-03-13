import { useState } from 'react'
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

function HomePage() {
  const [activeTrailer, setActiveTrailer] = useState(0)

  const upcoming = dramas.filter(d => d.year === 2026)
  const featured = dramas.filter(d => d.rating >= 8.5)

  return (
    <div style={{ padding: '32px 0' }}>

      {/* Hero 區 */}
      <div style={{
        padding: '80px 48px 64px',
        marginBottom: '48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* 背景裝飾圓圈 */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fabba830 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', right: '-40px',
          width: '250px', height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #326fc320 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* 小標籤 */}
        <div style={{
          display: 'inline-block',
          background: '#fff5f3',
          border: '1px solid #fabba8',
          borderRadius: '999px',
          padding: '4px 16px',
          fontSize: '13px',
          color: '#fabba8',
          marginBottom: '24px',
          letterSpacing: '2px'
        }}>
          2022 – 2026 泰百筆記
        </div>

        {/* 主標題 */}
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 72px)',
          fontWeight: '900',
          color: '#132c56',
          margin: '0 0 8px',
          lineHeight: '1.1',
          letterSpacing: '-1px',
          animation: 'fadeSlideUp 0.8s ease forwards'
        }}>
          泰百一家親
        </h1>
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 72px)',
          fontWeight: '900',
          margin: '0 0 24px',
          lineHeight: '1.1',
          letterSpacing: '-1px',
          background: 'linear-gradient(90deg, #fabba8, #326fc3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'fadeSlideUp 0.8s ease 0.2s both'
        }}>

        </h1>

        {/* 副標題 */}
        <p style={{
          fontSize: '18px',
          color: '#888',
          margin: '0 0 40px',
          animation: 'fadeSlideUp 0.8s ease 0.4s both'
        }}>
          關於泰百的網站，紀錄我喜歡的劇集、CP 和音樂
        </p>

        {/* 按鈕 */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeSlideUp 0.8s ease 0.6s both'
        }}>
          <Link to="/dramas" style={{
            background: '#132c56',
            color: 'white',
            borderRadius: '999px',
            padding: '14px 36px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px rgba(19,44,86,0.2)'
          }}
          onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            瀏覽劇集列表
          </Link>
          <Link to="/cp" style={{
            background: 'white',
            color: '#132c56',
            border: '2px solid #fabba8',
            borderRadius: '999px',
            padding: '14px 36px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            認識 CP
          </Link>
        </div>
      </div>

      {/* 左7:右3 主體 */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

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
        <div style={{ flex: 3, position: 'sticky', top: '24px' }}>
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