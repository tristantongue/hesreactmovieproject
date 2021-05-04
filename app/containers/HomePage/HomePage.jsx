import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions';
import ReviewCard from '../App/components/ReviewCard/ReviewCard.jsx';
import CheckBox from '../App/components/CheckBox/CheckBox.jsx'

import "./HomePage.scss"

export function HomePage(props) {
  const [itemsOnPage, setItemsOnPage] = useState(20)
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredResults, setFilteredResults]= useState([])
  const [statefilters, setStateFilters] = useState([])
  const [checked, setChecked] = useState([])

  useEffect(() => {
    props.getMovieReviews()
  },[])

  useEffect(() => {
    initialSearchTermHandler()
  }, [])

  useEffect(() => {
    initialStateFiltersHandler()
  }, [])


  useEffect(() => {
    setLandingResults()
  }, [props])

  useEffect(() => {
   props.reviews.length &&handleFilters(checked)
  }, [searchTerm])

  useEffect(() => {
    props.reviews.length &&handleFilters(checked)
   }, [props.reviews])

  function setLandingResults() {
    props.reviews.length && setFilteredResults(dynamicSearch)
  }


  function initialSearchTermHandler() {
    if(props.location.state == null) {
      setSearchTerm('')
    } else {
      setSearchTerm(props.location.state.detail)
    }
  }

  function initialStateFiltersHandler() {
    if(props.location.state == null || props.location.state.filters.length === 0) {
      setChecked([])
      setStateFilters([])
    } else {
      setChecked(props.location.state.filters)
      setStateFilters(props.location.state.filters)
    }
  }


  function increaseItems() {
    setItemsOnPage(itemsOnPage+20)
  }

  function handleSearchChange(ev) {
    setSearchTerm(ev.target.value)
  }

  function dynamicSearch() {
    const filteredData = props.reviews.length && data.filter(item => item.display_title.toLowerCase().includes(searchTerm.toLowerCase()))
    props.reviews.length && setFilteredResults(filteredData)
    return filteredData
  }

   function handleFilters(filters) {
      setStateFilters(filters)
      const stagedResults = []
      if(filters.length === 0) {
        setFilteredResults(dynamicSearch())
      } else 
      {for (let filter of filters) {
        stagedResults.push(dynamicSearch().filter(item => item.mpaa_rating === filter.name))
      }
      var merged = [].concat.apply([], stagedResults)
      setFilteredResults(merged)}
   }

   function handleToggle(value) {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if(currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    handleFilters(newChecked)
  }


  const data = props.reviews
  

  return (
    <div>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
          <div className="searchArea">
              <input className="searchBar" type='text' value={searchTerm} onChange={handleSearchChange} placeholder="Search our Reviews"></input>
              <CheckBox          
                filterschecked={statefilters}
                handletoggle={handleToggle}
              ></CheckBox>
          </div>
        <div className="homePageContainer">
          {props.reviews.length &&
            filteredResults.slice(0,itemsOnPage).map((item, index) => (
              <ReviewCard
                image={item.multimedia.src}
                title={item.display_title}
                pd={item.publication_date}
                mpaa={item.mpaa_rating}
                cp={item.critics_pick}
                id={item.id}
                searchterm={searchTerm}
                filters={statefilters}
                key={index}
                >
              </ReviewCard>
            ))
          }
        </div>
        <button className="viewButton" onClick={increaseItems}>View More Reviews</button>
      </main>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log('state getting mapped', state);
  return {
    reviews: state.resources.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
