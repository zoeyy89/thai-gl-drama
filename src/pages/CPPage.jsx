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
    <div>
      <h1>CP 介紹</h1>
      <p>泰百一家親</p>

      {cpList.map(cp => (
        <div key={cp.name}>
          <Link to={`/cp/${cp.name}`}>
            <h2>{cp.name}</h2>
          </Link>
          <p>{cp.actor1} × {cp.actor2}</p>
          <p>出演作品（{cp.dramas.length}部）：</p>
          {cp.dramas.map(drama => (
            <Link key={drama.id} to={`/dramas/${drama.id}`}>
              <p>▸ {drama.title}（{drama.year}）</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CPPage