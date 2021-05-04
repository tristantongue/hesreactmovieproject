import React from 'react';
import './ReviewCard.scss';
import { Link } from 'react-router-dom';
import redTomato from './redtomato.png';
import greenSplat from './greensplat.png';

function ReviewCard(props) {

    return (
        <div className="cardContainer">
            
            <img className="cardImage" src={props.image}></img>
            <h3>{props.title}{
                (props.cp === 1) && (
                <span>  <img className="tomato" src={redTomato}></img></span>
                )
            }
            {
                (props.cp === 0) && (
                <span>  <img className="tomato" src={greenSplat}></img></span>
                )
            }</h3>
            <p>{props.pd}</p>
            <p className="cardMpaa">MPAA Rating: {props.mpaa === "" ? "Unrated" : props.mpaa}</p>
            
            <Link to={
                {pathname: "/view/" + props.id,
                state: { detail: props.searchterm, filters:props.filters}
                }}>View More
            </Link>
        </div>
    )
}

export default ReviewCard