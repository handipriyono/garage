import React, {Component} from 'react';
import * as All from '../actions'
import {connect} from 'react-redux';
import { Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Card  } from 'semantic-ui-react'

class bodys extends Component {

  componentDidMount() {
    this.props.getdata()
  }

  render() {
    console.log('ssss', this.props.garage)
    if (this.props.garage !== undefined) {
      return (<div className="cent">
        <Card>
   <Card.Group>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Garage Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Maximum Cars</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.props.garage.map(function(data, i) {
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{data.name}
                      <Link to={`/edit/${data._id}`}> Update </Link>
                     </Table.Cell>
                    <Table.Cell>{data.address}</Table.Cell>
                    <Table.Cell>{data.phone}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>{data.stocks}</Table.Cell>
                  </Table.Row>
              )
              })
            }

          </Table.Body>
        </Table>
    </Card.Group>
</Card>
      </div>)

    } else {
      return <div><img alt="load" src="https://www.pnevmoteh.ru/sites/default/files/loading.gif"/></div>
    }

  }

}

const mapStateToProps = function(state) {
  console.log(state)
  return {garage: state.data.data}
}

const mapDispatchToProps = function(dispatch) {
  return {
    getdata: function() {
      dispatch(All.getData())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(bodys);
