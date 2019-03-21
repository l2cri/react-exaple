import React from 'react';

const Weather = (props) => {
    return (
        <div className="infoWeath">
            {props.city &&
                <div>
                    <p>Местоположение: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp}</p>
                    <p>Давление: {props.pressure}</p>
                    <p>Закат: {props.sunset}</p>
                </div>
            }

            {props.error &&
                <p className="error">Ошибка: {props.error}</p>
            }
        </div>
    );
}

export default Weather;