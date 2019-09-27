import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'

export default class Apartments extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
            {this.props.apartments.map((apartment, index)=>{
                return (
                  <Link key={index} to={`/apartments/${apartment.id}`}><Card key={index} style={{ width: '18rem' }}>
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
            </React.Fragment>
        )
    }
}