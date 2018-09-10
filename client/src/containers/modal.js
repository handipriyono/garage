
import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class modmod extends Component {

  render() {
    return (
      <div>
          <Modal trigger={<Button>{this.props.data.model}</Button>}  >
            <Modal.Header>Details of {this.props.data.model}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
              <Modal.Description>
                <Header>{this.props.data.model}</Header>
                <p></p>
                <p>Brand: {this.props.data.brand}</p>
                <p>Year: {this.props.data.year}</p>
                  <p>Color: {this.props.data.color}</p>
                  <p>Mileage: {this.props.data.mileage}</p>
                  <p>Engine: {this.props.data.engine}</p>
                    <p>Power: {this.props.data.power}</p>
                    <p>Registration date: {this.props.data.registration}</p>
                      <p>Price: {this.props.data.price}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal></div>
    );
  }

}

export default modmod;
