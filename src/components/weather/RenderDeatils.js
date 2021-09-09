import React from 'react';

const RenderDetails = ({ data }) => {

    const windDirection = (data) => {
        const d = data.wind_deg;
        const directions = ['N','N/NE','E/NE','E','E/SE','SE','S/SE','S',
                            'S/SW','SW','W/SW','W','W/NW','NW','N/NW']

        if(d >= 350 || d === 10){
            return directions[0]
        } else if(d === 20 || d ===30){
            return directions[1]
        } else if(d === 40 || d === 50){
            return directions[2]
        } else if(d === 60 || d === 70){
            return directions[3]
        } else if(d >= 80 && d <= 100) {
            return directions[4]
        } else if(d === 100 || d === 110){
            return directions[5]
        } else {
            return directions[6]
        }
    }

    return (
        <div>
            <div>
                Pressure: {data.pressure}hP
                <br />
                Humidity: {data.humidity}%
                <div>
                    Wind:
                        Speed: {data.wind_speed}km/h 
                        Direction: {windDirection(data)}
                </div>
            </div>
        </div>
    )
}

export default RenderDetails