const AlbumArtist = ({ artists = [] }) => {
    return (
        <p className="album-artist">
        {artists.map(artist => (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            className="album-artist-link"
            aria-label={`Link to artist ${artist.name}`}
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        ))}
      </p>
    )
}

export default AlbumArtist