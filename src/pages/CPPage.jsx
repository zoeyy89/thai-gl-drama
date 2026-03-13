import { Link } from 'react-router-dom'
import dramas from '../data/dramas.json'

function CPPage() {
  const cpMap = {}

  dramas.forEach(drama => {
    drama.cp.forEach(cp => {
      if (!cpMap[cp.name]) {
        cpMap[cp.name] = {
          name: cp.name,
          actor1: cp.actor1,
          actor2: cp.actor2,
          dramas: []
        }
      }
      cpMap[cp.name].dramas.push(drama)
    })
  })

  const cpList = Object.values(cpMap).sort((a, b) => b.dramas.length - a.dramas.length)

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 0' }}>

      {/* 頁首 */}
      <h1 style={{ color: '#132c56', marginBottom: '4px' }}>CP 介紹</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>泰百一家親 🌸</p>

      {/* CP 卡片列表 */}
      {cpList.map(cp => (
        <div key={cp.name} style={{
          background: '#fff5f3',
          border: '1px solid #fabba8',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '16px'
        }}>

          {/* CP 名稱 */}
          <Link to={`/cp/${cp.name}`} style={{ textDecoration: 'none' }}>
            <h2 style={{ margin: '0 0 4px', color: '#132c56', fontSize: '20px' }}>
              {cp.name}
            </h2>
          </Link>

          {/* 演員名 */}
          <p style={{ margin: '0 0 12px', color: '#666', fontSize: '15px' }}>
            {cp.actor1} × {cp.actor2}
          </p>

          {/* 出演部數 */}
          <p style={{ margin: '0 0 8px', color: '#326fc3', fontSize: '13px', fontWeight: 'bold' }}>
            出演 {cp.dramas.length} 部作品
          </p>

          {/* 作品列表 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cp.dramas.map(drama => (
              <Link key={drama.id} to={`/dramas/${drama.id}`} style={{ textDecoration: 'none' }}>
                <span style={{
                  background: 'white',
                  border: '1px solid #fabba8',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '13px',
                  color: '#132c56'
                }}>
                  {drama.title}（{drama.year}）
                </span>
              </Link>
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}

export default CPPage