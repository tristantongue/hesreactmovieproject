/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Link, Switch, Route } from 'react-router-dom'
import hesImg from 'images/hes.png'
import HomePage from 'containers/HomePage/HomePage'
import ViewReview from 'containers/ViewReview/ViewReview.jsx'
import CriticsPage from 'containers/CriticsPage/CriticsPage.jsx'
import './index.scss'
//import '../../styles/styles.scss'


export default function App(props) { 
    return (
      <div className="app-wrapper">
        <Helmet defaultTitle="Everyone's a critic">
          <meta name="description" content="React Movie Reviews" />
        </Helmet>
        <div className="navigation">
            <div className="headerLogo">
                <img src={hesImg}></img>
            </div>
          <Link to="/">Reviews</Link>
          <Link to="/critics">Critics</Link>
        </div>

        <div className="mainContent">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/home" component={HomePage} />
          <Route path="/view/:id" component={ViewReview} />
          <Route path="/critics" component={CriticsPage}/>
        </Switch>
        </div>
      </div>
    )
  }
