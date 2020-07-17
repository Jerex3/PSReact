import React from 'react'
import Table from './Table'
import Input from './inputUser'
import tableDynamicData from '../tableUser.json';

class Users extends React.Component {

    render()
    {
        return (
            <div  style= {{marginLeft:"15%",float:'left',marginTop:"5%"}}>
                
                <Table data = {tableDynamicData} />
            </div>
        )

       
    }   

}


export default Users;