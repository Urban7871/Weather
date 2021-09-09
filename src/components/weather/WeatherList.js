import React from 'react';
import { connect } from 'react-redux';

import { getCoords } from '../../actions/index'
import RenderDailyForecast from './RenderDailyForecast';
import RenderHourForecast from './RenderHourForecast';

import '../../css/WeatherList.scss'
import RenderDetails from './RenderDeatils';

class WeatherList extends React.Component{
    componentDidMount() {
        this.props.getCoords();
    }
    renderCity() {
        const data = this.props.coords.coords.data;
        if(data){
            return(
                <div className={`city background`}>
                    <h2>
                    {data.timezone}
                    </h2>
                    <div className='city_tempNow'>
                        <h1>
                        {Math.round(data.current.temp)}&#176;C
                        </h1>
                        <h4>
                        Feels Like: &nbsp;
                        {Math.round(data.current.feels_like)}&#176;C
                        </h4>
                    </div>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
    

    render() {
        return(
            <div>
                <div className='weather weather_top'>
                    {this.renderCity()}
                    <RenderDetails data={this.props.coords.coords.data} />
                </div>
                <div className='weather weather_hour'>
                    <RenderHourForecast data={this.props.coords.coords.data} />
                </div>
                <div className='weather weather_daily'>
                    <RenderDailyForecast data={this.props.coords.coords.data} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { coords: state }
}

export default connect(mapStateToProps, { getCoords })(WeatherList)
