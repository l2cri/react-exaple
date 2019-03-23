import React, { setState } from 'react';
import { formCallback } from '../utils/event'


const Form = (props, state) => {
    state = { city: 'Kiev' }
    return (
        <form onSubmit={(e) => formCallback(e, props.weatherMethod, state.city)}>
            <input
                value={state.city}
                onChange={(e) => setState({ city: e.target.value })}
                type="text" name="city" placeholder="Город" />
            <button type="submit">Получить</button>
        </form>
    )
}

export default Form;