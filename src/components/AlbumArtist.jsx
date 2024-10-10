const AlbumArtist = ({ artists = [] }) => {
    console.log('Artists: ', artists) // Check if artists is an array
    return (
        <p>
            {artists.map(artist => artist.name).join(',')}
        </p>
    )
}

export default AlbumArtist