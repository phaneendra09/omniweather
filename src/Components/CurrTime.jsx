import React, { useState } from 'react'
import Clock from './Clock';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fdcf7c26f4e26857ab28f62fd9e82b9b`;

const CurrTime = () => {
  return (
    <div className='section'>
      <Clock />
    </div>
  )
}

export default CurrTime;