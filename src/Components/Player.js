
const Player = ({ name = 'PlayerName', team = 'CurrentTeam', nationality = 'Nationality', jerseyNumber = 'Anonymous', age = 'Anonymous', image = 'URLimg'}) => {
    const playerStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
    };

    const imageStyle = {
        maxWidth: '324px', 
        maxHeight: '300px', 
        borderRadius: '10px',
        
    };

    return (
        <div style={playerStyle}>
            <img src={image} alt={`${name} Image`} style={imageStyle} />
            <div>
                <h2>{name}</h2>
                <p><strong>Team:</strong> {team}</p>
                <p><strong>Nationality:</strong> {nationality}</p>
                <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
                <p><strong>Age:</strong> {age}</p>
            </div>
        </div>
    );
};


export default Player;
