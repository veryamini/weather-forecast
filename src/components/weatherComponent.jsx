import React, {Component} from 'react';
import '../styles/main.scss';
import CommonFunc from '../utils/commonFunc';
import {imgUrl} from '../utils/constants';

class WeatherCard extends Component {
	render() {
		const {city, temp, weather, date, list} = this.props;
		return (
			<div className='weather-card'>
				<div className='city-header'>{city.name}</div>
				<div className='date-header'>{CommonFunc.getFormattedDate(date)}</div>
				<div className='weather'>
					<div>
						<img alt={weather.icon} src={`${imgUrl.replace(/IMAGE_NAME/, weather.icon)}`}/>
					</div>
					<div className='weather-description'>{weather.description}</div>
				</div>
				<div className='temperature-wrapper'>
					<div className='temperature'>{CommonFunc.convertFarhCelcius(temp.temp)}</div>
					<span className='degree-celcius'>C</span>
				</div>
				<div className='min-max'>
					<div className='temperature-wrapper'>
						<div className='temperature'>{CommonFunc.convertFarhCelcius(temp.temp_max)}</div>
						<span className='degree-celcius'>C</span>
					</div>
					<div className='temperature-wrapper'>
						<div className='temperature min'>{CommonFunc.convertFarhCelcius(temp.temp_min)}</div>
						<span className='degree-celcius min'>C</span>
					</div>
				</div>
				<div className='min-max'>
					<div>
						<div className='time-class'>
							{CommonFunc.getTime(city.sunrise)}
						</div>
						<div className='sun-label'>Sunrise</div>
					</div>
					<div>
						<div className='time-class'>
							{CommonFunc.getTime(city.sunset)}
						</div>
						<div>Sunset</div>
					</div>
				</div>
				<div className='forecast-list'>
					{
						list && list.map((item, index) => {
							return (
								<div className='forecast-item' key={index}>
									<div>
										<div>{CommonFunc.getDayMonth(item.date)}</div>
										<div>{CommonFunc.getTime(item.date)}</div>
									</div>
									<div><img alt={item.weather.icon} src={`${imgUrl.replace(/IMAGE_NAME/, item.weather.icon)}`}/></div>
									<div className='temp-block'>
										<div className='temperature-small max'>{CommonFunc.convertFarhCelcius(item.temp.temp_max)}</div>
										<div className='temperature-small min'>{CommonFunc.convertFarhCelcius(item.temp.temp_min)}</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default WeatherCard;