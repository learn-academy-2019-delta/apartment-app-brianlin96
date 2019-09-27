import React from "react"
import {findApartment} from './api'


export default class Apartment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            apartmentID: props.match.params.id,
            apartment: {}
        }
    }

    componentDidMount(){
        console.log(this.state.apartmentID)
        findApartment(this.state.apartmentID)
        .then((apartment)=>{
            console.log(apartment);
            this.setState({apartment})
        })
    }
    
    render(){
        let {apartment} = this.state
        return(
            <div>
                <h1>{apartment.address} {apartment.city} {apartment.state} {apartment.zip}</h1>
                <h1>{apartment.name}</h1>
                <h1>{apartment.phone}</h1>
                <h1>{apartment.hours}</h1>
            </div>
        )
    }
}


