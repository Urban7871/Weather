import React from 'react';


const RenderDailyForecast = ({ data  }) => {
        if(data){
            const date = new Date;
            const today = date.getDay();
            console.log(date.getDay())
            let dayNum = today;
            const days = ['Monday','Tuesday','Wendsday','Thursday','Friday','Saturday','Sunday'];
            
            const rainChance = (day) => {
                const chance = day.pop * 100;    
                if(chance > 40){
                    return <div>{chance}%</div>
                } else {
                    return <div></div>
                }
            }
            return(
                data.daily.map((day) => {
                    if(dayNum === 7) {
                        dayNum  = 1;
                    } else {
                        dayNum++;
                    }
                    const dayName = days[dayNum - 1];
                    return (
                       <div key={day.dt} className='daily_weather'>
                        <h3>
                         {dayName}
                        </h3>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
                        {rainChance(day)}
                        </div>
                        <div className='daily_weather__temp'>
                            <div>
                        <p>
                           {Math.round(day.temp.day)}&#176;C
                        </p>
                            </div><div>

                        <p className='temp_night'>
                        {Math.round(day.temp.night)}&#176;C
                        </p>
                            </div>
                        </div>
                       </div>
                   )
                })
        )
    } else {
        return <div>Loading...</div>
    }
}

export default RenderDailyForecast