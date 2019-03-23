import { ERROR_API_WEATHER, GET_API_WEATHER_CITY } from '../actions/'

const initialState = {
  temp: undefined,
  city: undefined,
  country: undefined,
  pressure: undefined,
  sunset: undefined,
  error: undefined
}

const weather = (state = initialState, {type, payload}) => {

  switch (type) {
    case GET_API_WEATHER_CITY:
      return {
        temp: payload.main.temp,
        city: payload.name,
        country: payload.sys.country,
        pressure: payload.main.pressure,
        sunset: payload.sys.sunset,
        error: undefined
      }
    case ERROR_API_WEATHER:
      return {...initialState, error : payload}; 
    default:
      return initialState
  }
}

export default weather;