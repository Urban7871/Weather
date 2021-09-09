import React from 'react';


const RenderHourForecast = ({ data  }) => {

        console.log(data)
        if(data){
            const date = new Date();
            let time = date.getHours() - 1;
            let id = 0;
            return(
                data.hourly.map((hour) => {
                    id++
                    if(id <= 13){
                        if(time < 23) {
                            time++;
                        } else {
                            time = 0;
                        }
                        return(
                            <div key={hour.dt}>
                            <div className='item'>
                            <h4>
                                {time}
                            </h4>
                            <div className='item_data'>
                                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} />
                               {Math.round(hour.temp)}&#176;C
                            </div>
                        </div>
                        </div>
                    )
                }
                })
        )
    } else {
        return <div>Loading...</div>
    }
}

export default RenderHourForecast