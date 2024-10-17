const express = require("express")
const mongoose = require("mongoose")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
 const PORT = process.env.PORT || 5000

 const API_KEY =process.env.OPENWEATHER_API_KEY
 app.use(express.json())
 app.use(cors())

 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


 const weatherSchema = new mongoose.Schema({
    city:String,
    date:Date,
    temp:Number,
    feels_like:Number,
    main:String,
 })
 const Weather = mongoose.model('Weather',weatherSchema)

 const fetchWeatherData = async(city)=>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    return response.data
 }
 const sendEmailAlert = (weather) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ALERT_EMAIL,
        subject: 'Weather Alert',
        text: `Alert! Weather condition: ${weather.main}, Temperature: ${weather.temp}°C`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

 app.get('/api/weather/:city',async(req,res)=>{
    try {
        const weatherData = await fetchWeatherData(req.params.city)
        const weather = new Weather({
            city:weatherData.name,
            date:new Date(),
            temp:weatherData.main.temp,
            feels_like:weatherData.main.feels_like,
            main:weatherData.weather[0].main

        })
        await weather.save()
        if(weatherData.main.temp>35){
            sendEmailAlert(weatherData)

        }
        res.json(weather)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 })

 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 })