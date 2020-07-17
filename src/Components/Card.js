import React from 'react'
import '../styles/Card.css'
import logo from '../icons/carpa.png'
 
class PersonalCard extends React.Component {

    render(){
        return( 
        <p className="card" style = {{backgroundColor : "#5199FF",padding:"20px"}}>
          
        <img src={logo} alt="Avatar" style={{width:"30%",}}></img>
        
        <div className="container">
          <h4><b>Carpa</b></h4>
        <p>{this.props.nombre}</p>
        </div>
        </p> )
    }


}



export default PersonalCard;