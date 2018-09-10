const axios = require('axios')


export const getDataSukses = (datasini)=>{
  return {
    type:'get_data_sukses',
    datasini
  }
}

export const getSingleGarage = (dataSingleGarage)=>{
  return {
    type:'get_data_garage_sukses',
    dataSingleGarage
  }
}
export const updateCarSukses = (datacar)=>{
  return {
    type:'update_data_car_sukses',
    datacar
  }
}


export const updateCar = (id,objdata) =>{
  return(dispatch)=>{
    return axios({
      method:'put',
      url:`http://localhost:3000/car/edit/${id}`,
      data:objdata
    })
    .then((response) =>{
      dispatch(updateCarSukses(response))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export const getGarage = (id) =>{
  return(dispatch)=>{
    return axios({
      method:'get',
      url:`http://localhost:3000/garages/${id}`
    })
    .then((response) =>{
      dispatch(getSingleGarage(response.data))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}


export const getData = ()=>{
  return(dispatch)=>{
    return axios({
      method:'get',
      url:'http://localhost:3000/garages'
    })
    .then((response) =>{
      dispatch(getDataSukses(response.data))

    })
    .catch(err=>{
      console.log(err)
    })
  }
}
