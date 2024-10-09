/* eslint-disable react/prop-types */
const AlbumArtist = ({ artists }) => {
    return (
        <p>
            {artists.map(artist => artist.name).join(',')}
        </p>
    )
}

export default AlbumArtist