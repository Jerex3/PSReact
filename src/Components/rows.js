import React from 'react'
import '../styles/Table.css'


class rows extends React.Component {


   

    render(){
        return(this.props.users.map((e) => (
            <tr>
                <td>{e.Nombre}</td><td>{e.Apellido}</td><td>{e.Dni}</td>
            </tr>)))
    }
    
}

export default rows;