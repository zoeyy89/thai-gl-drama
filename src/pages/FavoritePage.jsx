import { Link } from 'react-router-dom'
import dramas from '../data/dramas.json'

function FavoritePage() {
  const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]')
  const favoriteDramas = dramas.filter(drama => savedIds.includes(drama.id))

  return (
    <div>
      <h1>我的收藏</h1>

      {favoriteDramas.length === 0 ? (
        <p>還沒有收藏任何劇集，快去逛逛！</p>
      ) : (
        favoriteDramas.map(drama => (
          <div key={drama.id}>
            <Link to={`/dramas/${drama.id}`}>
              <h3>{drama.fullTitle}</h3>
            </Link>
            <p>{drama.year} | 評分：{drama.rating > 0 ? drama.rating : '暫無評分'}</p>
            {drama.cp.length > 0 && (
              <p>主演 CP：{drama.cp.map((c, i) => (
                <span key={i}>
                  <Link to={`/cp/${c.name}`}>{c.name}</Link>
                  （{c.actor1} × {c.actor2}）
                </span>
              ))}</p>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default FavoritePage