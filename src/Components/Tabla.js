import React from 'react'
import Rows from './rows'
import '../styles/Table.css'
import Table from 'react-table'
    const usuarios = [
        {
            "Nombre": "Juan",
            "Apellido":"Perez",
            "Dni": '32123121'
        },
        {
            "Nombre": "pedro",
            "Apellido":"sanz",
            "Dni": '322323121'
        },
        {
            "Nombre": "Jeremias",
            "Apellido":"Manuel",
            "Dni": '41923456'
        }
    ]



export default class Tabla extends React.Component {



    render()
    {
        return( 
            
             <Table columns = {{Header:'Nombre',accesor:"Nombre"},{Header:"Apellido",accesor:"Apellido"},{Header:'Dni', accesor:"Dni"}} data = {usuarios}>
                 
             </Table>
        )
    }

    



}