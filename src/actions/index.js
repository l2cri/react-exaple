import api from '../api';
export const GET_API_WEATHER_CITY = 'GET_API_WEATHER_CITY';
export const ERROR_API_WEATHER = 'ERROR_API_WEATHER'

export const gettingWeather = (city) => (dispatch, getState) => {

    api.getWeather(city)
        .then(({ data }) => {

            dispatch({
                type: GET_API_WEATHER_CITY,
                payload: {
                    main: data.main,
                    name: data.name,
                    sys: data.sys,
                }
            });
        })
        .catch((error) => {
            dispatch({
                type: ERROR_API_WEATHER,
                payload: error.message
            });
        });

};  
