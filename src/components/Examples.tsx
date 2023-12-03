"use client";

import React, { useState, useEffect } from 'react'
import ChristmasImage from "./ImageExample";
import JokeExample from "./JokeExample";

function Examples() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [sleeps, setSleeps] = useState(0)
    const [dayOfTheWeek, setDayOfTheWeek] = useState('Unknown')

    useEffect(() => {
         fetch(`/api/countdown`)
            .then(response => response.json())
            .then(data => {
                setDays(data.days)
                setHours(data.hours)
                setMinutes(data.minutes)
                setSleeps(data.sleeps)
                setDayOfTheWeek(data.dayOfTheWeek)
            })
            .catch(error => {
                console.error(error)
            })
    });

    return (
        <div className="text-center pb-10" id="overview">
            <div className="mt-10 mx-auto">
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Christmas is in <span className="text-red-500">{sleeps}</span> days!</h2>
                {sleeps === 1 ? <p className="mt-6 text-lg leading-8 text-gray-600">Merry Christmas!</p> : <p className="mt-6 text-lg leading-8 text-gray-600">Wow! Christmas falls on a <span className="text-red-500">{dayOfTheWeek}</span> this year.</p>}
            </div>
            <ChristmasImage />
            <JokeExample />
        </div>
    )
}
export default Examples