import React from 'react';
import Player from './Player';
import players from './Players';

const PlayersList = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'gold' }}>Golden Boys</h1>
            <div style={{ display: 'flex', }}>
                {players.map((player, index) => (
                    <Player
                        {...player}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlayersList;
