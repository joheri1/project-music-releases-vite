import Album from './components/Album.jsx'
import data from "./data.json"

console.log(data)

export const App = () => {
  return (
  <div className="album-container">
    {data.albums.items.map((album) => (
      <Album key={album.id} albumData={album} />
    ))}
  </div>
  )
}
