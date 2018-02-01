import React, { Component }  from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData){

        const place = cityData.city.name;
        return(
            <tr key={place}>
                <td>{place}</td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>  
        );
    }
}

function mapStateToProps({weather}){
    return{weather}; // {weather} == {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);