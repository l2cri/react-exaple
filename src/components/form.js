import React, { useState } from 'react';
import { formCallback } from '../utils/event'


const Form = (props) => {
    const [city, setCity] = useState('Kiev')
     return (
        <form onSubmit={(e) => formCallback(e, props.weatherMethod, city)}>
            <input
                value={city}
                onChange={(e) => setCity( e.target.value)}
                type="text" name="city" placeholder="Город" />
            <button type="submit">Получить</button>
        </form>
    )
}

export default Form;