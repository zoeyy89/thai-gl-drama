import { useParams, Link } from 'react-router-dom'
import cpData from '../data/cp.json'
import dramas from '../data/dramas.json'
import instaIcon from '../assets/insta.png'

function CPDetail() {
  const { cpName } = useParams()
  const cp = cpData.find(c => c.name === cpName)
  const cpDramas = dramas.filter(drama =>
    drama.cp.some(c => c.name === cpName)
  )

  if (!cp) {
    return (
      <div style={{ padding: '32px 0' }}>
        <p>找不到這組 CP，請等待緣分降臨 🌸</p>
        <Link to="/cp" style={{ color: '#326fc3' }}>回 CP 列表</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 0' }}>

      {/* 回上頁 */}
      <Link to="/cp" style={{ color: '#326fc3', textDecoration: 'none', fontSize: '14px' }}>
        ← 回 CP 列表
      </Link>

      {/* 標題區 */}
      <div style={{ margin: '24px 0 20px' }}>
        <h1 style={{ margin: '0 0 4px', color: '#132c56', fontSize: '32px' }}>
          {cp.name}
        </h1>
        <h2 style={{ margin: '0 0 16px', color: '#888', fontSize: '18px', fontWeight: 'normal' }}>
          {cp.actor1} × {cp.actor2}
        </h2>

        {/* IG 連結 */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {cp.instagram1 && (
            <a href={cp.instagram1} target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: '#326fc3', textDecoration: 'none', fontSize: '14px' }}>
              <img src={instaIcon} alt="Instagram" height="18" />
              {cp.actor1}
            </a>
          )}
          {cp.instagram2 && (
            <a href={cp.instagram2} target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: '#326fc3', textDecoration: 'none', fontSize: '14px' }}>
              <img src={instaIcon} alt="Instagram" height="18" />
              {cp.actor2}
            </a>
          )}
        </div>
      </div>

      {/* CP 介紹 */}
      {cp.bio && (
        <p style={{
          color: '#444',
          fontSize: '15px',
          lineHeight: '1.8',
          padding: '16px 20px',
          background: '#fafafa',
          borderRadius: '12px',
          borderLeft: '4px solid #fabba8',
          marginBottom: '24px'
        }}>
          {cp.bio}
        </p>
      )}

      {/* 出演作品 */}
      <h3 style={{ color: '#132c56', marginBottom: '16px' }}>
        出演作品（{cpDramas.length} 部）
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {cpDramas.map(drama => (
          <div key={drama.id} style={{
            background: '#fff5f3',
            border: '1px solid #fabba8',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <Link to={`/dramas/${drama.id}`} style={{ textDecoration: 'none' }}>
                <p style={{ margin: '0 0 4px', color: '#132c56', fontWeight: 'bold', fontSize: '16px' }}>
                  {drama.fullTitle}
                </p>
              </Link>
              <p style={{ margin: '0', color: '#888', fontSize: '13px' }}>
                {drama.year} · {drama.episodes > 0 ? `${drama.episodes}集` : '集數待補'}
              </p>
            </div>
            <span style={{
              background: drama.rating > 0 ? '#fff5f3' : '#f5f5f5',
              border: `1px solid ${drama.rating > 0 ? '#fabba8' : '#ddd'}`,
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '14px',
              color: drama.rating > 0 ? '#132c56' : '#aaa',
              whiteSpace: 'nowrap'
            }}>
              ⭐ {drama.rating > 0 ? drama.rating : '—'}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CPDetail