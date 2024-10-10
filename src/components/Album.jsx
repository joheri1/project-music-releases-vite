import AlbumArt from './AlbumArt'
import AlbumTitle from './AlbumTitle'
import AlbumArtist from './AlbumArtist'
/*import AlbumIcons from './AlbumIcons'*/

const Album = ({ albumData }) => {
  return (
    <div className="album-card">
      <AlbumArt image={albumData.images[0].url} />
      <div className="album-title">
        <AlbumTitle name={albumData.name} url={albumData.external_urls.spotify} />
      </div>
      <div className="album-artist"> 
        <AlbumArtist Name artists={albumData.artists} />
      </div>
    </div>
  )
}

export default Album