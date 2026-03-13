import { useParams, Link } from 'react-router-dom'
import cpData from '../data/cp.json'
import dramas from '../data/dramas.json'
import instaIcon from '../assets/insta.png'  // ← 新增

function CPDetail() {
  const { cpName } = useParams()
  const cp = cpData.find(c => c.name === cpName)
  const cpDramas = dramas.filter(drama =>
    drama.cp.some(c => c.name === cpName)
  )

  if (!cp) {
    return (
      <div>
        <p>找不到這組 CP，請等待緣分降臨</p>
        <Link to="/cp">回 CP 列表</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/cp">← 回 CP 列表</Link>

      <h1>{cp.name}</h1>
      <h2>{cp.actor1} × {cp.actor2}</h2>

      {cp.bio && <p>{cp.bio}</p>}

      <div>
        {cp.instagram1 && (
        <a href={cp.instagram1} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1px' }}>
            <img src={instaIcon} alt="Instagram" height="20" />
            {cp.actor1}
        </a>
        )}
        {cp.instagram2 && (
        <a href={cp.instagram2} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1px' }}>
            <img src={instaIcon} alt="Instagram" height="20" />
            {cp.actor2}
        </a>
        )}
      </div>

      <h3>出演作品（{cpDramas.length}部）</h3>
      {cpDramas.map(drama => (
        <div key={drama.id}>
          <Link to={`/dramas/${drama.id}`}>
            <p>▸ {drama.fullTitle}（{drama.year}）</p>
          </Link>
          <p>評分：{drama.rating > 0 ? drama.rating : '暫無評分'}</p>
        </div>
      ))}
    </div>
  )
}

export default CPDetail