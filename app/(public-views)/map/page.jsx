"use client"

import React, { useState } from 'react'

const MapPage = () => {

    const [location, setLocation] = useState('')
    const [dates, setDates] = useState('')

    const getZip = (zip) => {
        switch (zip) {
            case 33315:
            case 33316:
            case 33324:
            case 33336:
                setLocation('north')
                setDates('Tuesdays & Fridays')
                break;
            case 33317:
            case 33348:
            case 33355:
            case 33388:
            case 33301:
                setLocation('south')
                setDates('Mondays & Thursdays')
                break;
            default:
                setLocation('central')
                break
        }
    }


    return (
        <div className='flex flex-col'>
            <button className='h-[55px] px-10 bg-primary-500 text-white' onClick={() => getZip(33316)}>Get Map</button>
            {
                location === 'north' ? (
                    <>
                        <h1>{dates}</h1>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1l2DFtomFi_WFCzSLU-YiX0vTSaHzy68&ehbc=2E312F" width="1920" height="1080"></iframe>
                    </>
                ) : location === 'south' ? (
                    <>
                    <h1>{dates}</h1>
                    <span>SOuth</span>
                    </>
                ) : location === 'central' ? (
                    <>
                    <h1>{dates}</h1>
                    <span>Central</span>
                    </>
                ) : (
                    <span>Outro lugar</span>
                )
            }
        </div>
    )
}

export default MapPage