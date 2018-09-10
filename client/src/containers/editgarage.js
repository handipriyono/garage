import React, { Component } from 'react';
import {  Table} from 'semantic-ui-react'
import * as All from '../actions'
import {connect} from 'react-redux';
import { Card } from 'semantic-ui-react'
import Mod from './modal'
import Editcar from './editcar'

class editgarage extends Component {

  constructor(props){
     super()
     this.state = {
       editan:''
     }
 }


    componentDidMount() {
      this.props.getGarage(this.props.match.params.id)
      this.setState({
        editan:this.props.updateCar
      })

    }

  render() {
    let singles = this.props.garages
    let edits = this.state.editan
    console.log(singles)
      if(singles=== undefined){
        return <div><img alt="load" src="https://www.pnevmoteh.ru/sites/default/files/loading.gif"/></div>
      } else {
        return (
          <div className="cent">
            <h1>Details Garage</h1>
      <Card>
       <Card.Group>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Garage Name</Table.HeaderCell>
                    <Table.HeaderCell>List of Cars</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {
                  singles.map(function(data, i) {
                    return (
                      <Table.Row key={i}>
                        <Table.Cell>{data.name}
                         </Table.Cell>
                         <Table.Cell>{data.carlist.map(function(data, i){
                             return (
                               <ul key={i}>
                                 <li> <Mod data={data} /> <Editcar data={data} edits={edits}/></li>
                               </ul>

                             )
                           })}</Table.Cell>
                        <Table.Cell>{data.address}</Table.Cell>
                        <Table.Cell>{data.phone}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>

                      </Table.Row>
                  )
                  })
                }

              </Table.Body>
            </Table>
          </Card.Group>
      </Card>
        </div>
        );
      }
  }

}


const mapStateToProps = function(state) {
  console.log(state.datasingle.data )
  return {garages: state.datasingle.data }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getGarage: function(id) {
      dispatch(All.getGarage(id))
    },
    updateCar:function(id, data){
      dispatch(All.updateCar(id, data))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(editgarage);
