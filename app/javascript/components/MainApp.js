import React from "react"
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {getApartments} from './api'
import Apartment from '/Apartment'

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
    this.getApartments()
  }

  render () {
    return (
      <React.Fragment>
        <Router>
        {this.state.apartments.map((apartment, index)=>{
          return (
            <Link to={`/apartments/${apartment.id}`}><Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{apartment.address}</Card.Title>
                <Card.Text>
                  {apartment.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card></Link>
        )})}
        </Router>
        <Route path='/apartments/:id' component={Apartment} />
      </React.Fragment>
    );
  }
}

export default MainApp
