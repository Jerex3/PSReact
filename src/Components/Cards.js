import React from 'react'
import Card from './Card'

class Cards extends React.Component
{
    render()
    {
        return(
            
            this.props.Carpas.map(e => 
           
           <div style = {{marginLeft:"3%",marginTop:"20px", float:'left'}}>
                <Card nombre = {e.Nombre}></Card>
            </div>
            
            )
       
        )
    }
}

export default Cards;