import React from 'react'
import '../styles/slidebar.css'
import logo from '../icons/icono.svg'
import icon from '../icons/coche.svg'
import {Link} from 'react-router-dom'
class Slidebar extends React.Component {
    
    constructor(){
        super();

        this.state = {
            open: false,
            left:"-200px",
        }
        this.SlideB = this.SlideB.bind(this);
    }
   

    SlideB(){
        if(this.state.open)
        {
            this.setState({
                open : !this.state.open,
                left:'-200px'
            })
        }
        else
        {
            this.setState({
                open : !this.state.open,
                left:'0px' 
            })
        }
    }



    render()
    {
        return (
            
            <div id = "slideBar" style ={{left:this.state.left}}> 
                <img className = "logoT" src = {logo} ></img>
                <div className = "btn" onClick= {this.SlideB}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <Link onClick ={this.SlideB} to = '/'>
                        <li>Balneario</li>
                    </Link>
                    <Link onClick ={this.SlideB} to = '/parking'>
                        <li>Estacionamiento</li>
                    </Link>
                    <Link onClick ={this.SlideB} to = './users'>
                        <li>Balneario</li>
                    </Link>
                 
                </ul>

                
            
            </div>
           
            
        )
    }

}

export default Slidebar;