import React from 'react';

import './CriticCard.scss';

function CriticCard(props) {
    return (
        <div className="criticCardContainer">
            <h3>{props.name}</h3>
            <p>No. of Reviews: {props.count}</p>
        </div>
    )
}

export default CriticCard