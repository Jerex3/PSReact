import React, { Component } from 'react';

export default class TableDynamic extends Component {

    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    defaultConfiguration(headerCell){

      var resultHeader = new Array();
      headerCell.forEach(element => {
         resultHeader.push(
            {
              id:element.id,
              numeric:false,
              disablePadding:false,
              label:element.id.toUpperCase()
            }
          );
      })
      return resultHeader;
    }

    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        var headerCell = new Array();
        keys.forEach(element => {
          headerCell.push({id:element});
        });
        this.defaultConfiguration(headerCell);
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    
    render(){
        return (
          <div>
            <table>
              <thead>
                <tr>{this.getHeader()}</tr>
              </thead>
              <tbody>
                {this.getRowsData()}
              </tbody>
            </table>
          </div>
        );
    }
}

const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}