import AlbumArt from './AlbumArt'
import AlbumName from './AlbumName'
import AlbumArtist from './AlbumArtist'

const Album = ({ albumData }) => {
  return (
    <div className="album-card">
      <AlbumArt image={albumData.images[0].url} />
      <AlbumName name={albumData.name} />
      <AlbumArtist tName artists={albumData.artists} />
    </div>
  )
}

export default Album