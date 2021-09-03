import React from 'react';
import { connect } from 'react-redux';

import { getCoords } from '../actions/index'
class WeatherList extends React.Component{
    componentDidMount() {
        this.props.getCoords();
    }

    renderWeather() {
        const data = this.props.coords.coords.data;
        console.log(data)
        if(data){
            return(
                <div>
                {data.name}
                <br />
                {data.main.temp} 
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
    }

    render() {
        return(
            <div>
                {this.renderWeather()}
                WeatherList
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { coords: state }
}

export default connect(mapStateToProps, { getCoords })(WeatherList)