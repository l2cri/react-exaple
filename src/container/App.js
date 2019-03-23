import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import * as WeatherActions from '../actions';
import {unixTimeToStr}  from '../utils/time'

const mapStateToProps = (state) => ({
    weather: {...state.weather , sunset : unixTimeToStr(state.weather.sunset)}
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(WeatherActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)