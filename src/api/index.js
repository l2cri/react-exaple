import axios from 'axios';

const API_KEY = 'bd5cbf4204b1112110372d63829c0697'
export default  {
    getWeather(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    }
}