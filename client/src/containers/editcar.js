
import React, { Component } from 'react';
import { Button, Header, Image, Modal, Checkbox, Form  } from 'semantic-ui-react'

class editcar extends Component {
  constructor(props){
     super()
     this.state = {
       title:'',
       price:'',
       registration:'',
       power:'',
       engine:'',
       mileage:'',
       color:'',
       year:'',
       model:'',
       brand:'',

     }
 }
 saves() {
   let data = {
     price:this.state.price,
     registration:this.state.registration,
     power:this.state.power,
     engine:this.state.engine,
     mileage:this.state.mileage,
     color:this.state.color,
     year:this.state.year,
     model:this.state.model,
     brand:this.state.brand
   }
   this.props.edits(this.props.data._id, data )
 console.log(data)
 }

handleChangebrand(event) {
  this.setState({brand: event.target.value})
  console.log(this.state.title)
}
handleChangeprice(event) {
this.setState({price: event.target.value})
}
handleChangereg(event) {
this.setState({registration: event.target.value})
}
handleChangepower(event) {
this.setState({power: event.target.value})
}
handleChangeengine(event) {
this.setState({engine: event.target.value})

}
handleChangemileage(event) {
this.setState({mileage: event.target.value})
}
handleChangecolor(event) {
this.setState({color: event.target.value})

}
handleChangeyear(event) {
this.setState({year: event.target.value})

}
handleChangemodel(event) {
this.setState({model: event.target.value})

}

componentDidMount() {
  console.log('ssss',(this.props))
  this.setState ({
    model: this.props.data.model,
    year:this.props.data.year,
    color:this.props.data.color,
    mileage:this.props.data.mileage,
    engine:this.props.data.engine,
    power:this.props.data.power,
    registration:this.props.data.registration,
    price:this.props.data.price,
    brand:this.props.data.brand

  })
}

  render() {
    return (
      <div>
          <Modal trigger={<Button>edit car</Button>}>
            <Modal.Header>Details of {this.props.data.model}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='https://media.zigcdn.com/media/model/2017/Jul/mercedes-gla_600x300.jpg' />
              <Modal.Description>
                <Form>
    <Form.Field>

      <label>Brand</label>
      <input type="text" value={this.state.brand} onChange={this.handleChangebrand.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Year</label>
      <input type="text" value={this.state.year} onChange={this.handleChangeyear.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Color</label>
      <input type="text" value={this.state.color} onChange={this.handleChangecolor.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Mileage</label>
      <input type="text" value={this.state.mileage} onChange={this.handleChangemileage.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>MODEL</label>
      <input type="text" value={this.state.model} onChange={this.handleChangemodel.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Engine</label>
      <input type="text" value={this.state.engine} onChange={this.handleChangeengine.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Power</label>
      <input type="text" value={this.state.power} onChange={this.handleChangepower.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Registration</label>
      <input type="text" value={this.state.registration} onChange={this.handleChangereg.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input type="text" value={this.state.price} onChange={this.handleChangeprice.bind(this)}/>
    </Form.Field>
    <Button type='submit' onClick={this.saves.bind(this)}>Submit /Update this data</Button>
  </Form>
               

              </Modal.Description>
            </Modal.Content>
          </Modal></div>
    );
  }

}

export default editcar;
