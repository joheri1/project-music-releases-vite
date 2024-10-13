import heartIcon from '../assets/icons/heart.svg'
import playIcon from '../assets/icons/play.svg'
import moreIcon from '../assets/icons/dots.svg'

const AlbumIcons = () => {
  return (
    <div className="album-icons">
      <img src={heartIcon} alt="Favorite" className="favorite-icon" />
      <img src={playIcon} alt="Play" className="play-icon" />
      <img src={moreIcon} alt="More" className="more-icon" />
    </div>
  )
}

export default AlbumIcons