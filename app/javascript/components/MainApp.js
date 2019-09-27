import React from "react"
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { getApartments } from './api/index'
import Apartments from './Apartments'
import Apartment from './Apartment'

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    getApartments()
    .then((apartments)=>{
      this.setState({apartments: apartments})
    })
  }

  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/apartments/:id' component={Apartment} />
            <Route exact path='/apartments' render={(props)=><Apartments {...props} apartments={this.state.apartments}/>} /> 
          </Switch>
        </Router>
        
      </React.Fragment>
    );
  }
}

export default MainApp
