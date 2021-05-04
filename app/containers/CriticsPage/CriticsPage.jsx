import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, Switch, Route, useHistory } from 'react-router-dom'

import { getCritics } from 'resources/critics/critics.actions';
import ReviewCard from '../App/components/CriticCard/CriticCard.jsx';

import './CriticsPage.scss'
import CriticCard from '../App/components/CriticCard/CriticCard.jsx'

export function CriticsPage(props) {
    const [critics, setCritics] = useState([])

    useEffect(() => {
        props.getCritics()
      },[])

      useEffect(() => {
        props.reviews.length &&createReviewCounts()
      },[])

    function createReviewCounts() {

        const tempList = []
        for(let review of props.reviews) {
            if(!tempList.filter(item => item.name === review.byline.toLowerCase()).length > 0) {
                let obj = {name: review.byline.toLowerCase(),
                            count: 1
                            }
                tempList.push(obj)
            } else if (tempList.filter(item => item.name === review.byline.toLowerCase()).length > 0) {
                let target = tempList.filter(item => item.name === review.byline.toLowerCase())
                target[0].count++;
            }
        }
        tempList.sort((a,b) => (a.count > b.count) ? -1: 1)

        setCritics(tempList)
    }

    return (
        <div>
            <Helmet>
                <meta name="description" content="Home" />
            </Helmet>
            <div className="criticsHeader"><h2>Our Critics</h2></div>
            <div className="criticsPageContainer">
                {
                    critics.length && critics.map((item, index) => (
                        <CriticCard
                        name={item.name}
                        count={item.count}
                        ></CriticCard>
                    ))
                }
                
            </div>

        </div>
    )
}




const mapStateToProps = (state, ownProps) => {
    console.log('state getting mapped', state);
    return {
      critics: state.resources.critics,
      reviews: state.resources.reviews
    }
  }

  const mapDispatchToProps = dispatch => ({
    getCritics: () => dispatch(getCritics()),
  })


  export default compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(CriticsPage)