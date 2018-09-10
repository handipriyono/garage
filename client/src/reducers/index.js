const initialState = {
  data:[],
  datasingle:[]
}

export const reducerdata = (state = initialState, action)=>{
  switch(action.type){
    case 'get_data_sukses':
      return {...state, data:action.datasini}
    case 'get_data_garage_sukses':
      return {...state, datasingle:action.dataSingleGarage}
    default:
      return state
  }
}
