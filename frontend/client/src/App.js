import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
            alert('Error fetching weather data');
        }
    };

    return (
        <div>
            <h1>Weather Monitoring System</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weatherData && (
                <div>
                    <h2>Weather in {weatherData.city}</h2>
                    <p>Temperature: {weatherData.temp}°C</p>
                    <p>Feels Like: {weatherData.feels_like}°C</p>
                    <p>Condition: {weatherData.main}</p>
                </div>
            )}
        </div>
    );
}

export default App;