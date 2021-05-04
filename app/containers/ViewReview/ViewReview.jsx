import React, { useState, useEffect } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import './ViewReview.scss'
import { getMovieReviews } from 'resources/reviews/reviews.actions';
import redTomato from './redtomato.png';
import greenSplat from './greensplat.png';

function ViewReview(props) {

    useEffect(() => {
        props.getMovieReviews()
      },[])

    function goBack() {
        props.history.push({pathname: '/',
                            state: {detail: props.location.state.detail, filters:props.location.state.filters}
    });
    }
    
    const movie = props.viewedReview
    console.log('viewpage props',props)

    return (
        <div className="viewReviewContainer">
            <div className="viewReviewCard">
                <h3 className="viewReviewHeader">{movie.headline}{
                (movie.critics_pick === 1) && (
                <span>  <img className="tomato" src={redTomato}></img></span>
                )
            }
            {
                (movie.critics_pick === 0) && (
                <span>  <img className="tomato" src={greenSplat}></img></span>
                )
            }</h3>
                <h4>{movie.byline}</h4>
                <img className="viewPageImage" src={movie.multimedia.src}></img>
                <p>{movie.summary_short}</p>
                <a href={movie.link.url} target="_blank" rel="noopener noreferrer">{movie.link.suggested_link_text}</a>
                <button onClick={goBack}>Return</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const targetId = Number(props.match.params.id)
    console.log(targetId)
    console.log('the state is', state)
    const foundReview = state.resources.reviews.find(review => review.id === targetId)
    console.log('the found review is', foundReview)

    return {
        viewedReview: foundReview
    }
}

const mapDispatchToProps = dispatch => ({
    getMovieReviews: () => dispatch(getMovieReviews()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(ViewReview)