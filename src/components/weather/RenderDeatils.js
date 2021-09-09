import React from 'react';

const RenderDetails = ({ data }) => {

    const windDirection = (data) => {
        const d = Math.round(data.wind_deg / 10) - 1;
        console.log(d)
        const directions = ['N','N/NE','N/NE','NE','NE','E/NE','E/NE','E','E','E','E/SE','E/SE','SE','SE',
                            'S/SE','S/SE','S','S','S','S/SW','S/SW','SW','SW','W/SW',
                            'W/SW','W','W','W','W/NW','W/NW','NW','NW','N/NW','N/NW','N','N'];
        return directions[d]
    }

    if(data){
        return (
            <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                Pressure: {data.current.pressure}hP
                &nbsp;&nbsp;&nbsp;
                Humidity: {data.current.humidity}%
                <div>
                       Wind Speed: {data.current.wind_speed}km/h 
                        &nbsp;
                       Wind Direction: {windDirection(data.current)}
                </div>
            </div>
        </div>
    )
} else {
    return <div></div>
}
}

export default RenderDetails