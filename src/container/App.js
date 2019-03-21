import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import * as WeatherActions from '../actions'

const mapStateToProps = (state) => ({
    counter: state.weather
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(WeatherActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)