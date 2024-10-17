# weather-monitoring

# Objective
This project develops a real-time data processing system that retrieves weather data from the OpenWeatherMap API, processes it, and provides summarized insights with daily rollups and aggregates for specific metro cities in India.

# Features
Real-Time Data Retrieval: Retrieves weather data for metros such as Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad every 5 minutes.
Temperature Conversion: Converts temperature data from Kelvin to Celsius.
Daily Weather Summaries: Provides daily summaries including average, maximum, minimum temperatures, and dominant weather conditions.
Alerting System: Tracks thresholds for temperature and weather conditions, triggering alerts when conditions are met.

# Data Sources
Weather data is retrieved from the OpenWeatherMap API, focusing on:

main: Main weather condition.
temp: Current temperature.
feels_like: Perceived temperature.
dt: Timestamp of data update.

# Rollups and Aggregates
Daily Summary: Calculates daily aggregates including average, maximum, and minimum temperatures.
Alerts: Configurable user thresholds (e.g., alert if temperature exceeds 35°C for two consecutive updates).

# Test Cases
Test system initialization and API connection.
Simulate API data retrieval and ensure parsing.
Validate temperature conversion from Kelvin to Celsius.
Test daily summary calculation and alert triggering.

#  Dependencies
Node.js
Express.js
OpenWeatherMap API key (required to access weather data)
MongoDB (for storing weather summaries)

# Setup Instructions
1) git clone https://github.com/123chinmaygonde/weather-monitoring
2) npm install
3) cd weather-monitoring
4) cd backend
5) npm run dev
6) cd frontend
7) cd client
8) npm start










