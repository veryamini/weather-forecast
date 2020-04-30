import React, {Component} from 'react';
import '../styles/main.scss';
import CommonFunc from '../utils/commonFunc';
import WeatherCard from './weatherComponent';
import SearchPanel from './searchComponent';
import fetchWeatherDetails from '../services/weatherService';


class WeatherHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: undefined,
			cityOptions: [],
			cityData: undefined,
		};
	}

	componentDidMount() {
		fetchWeatherDetails(1283240).then((cityData) => {
	  		this.setState({
	  			cityData,
	  		});
    	});
	}

	handleCityChange = (city) => {
		this.setState({
			city,
		});
	}

	handleCitySearch = (input, callback) => {
		input = input.trim();
		if (!CommonFunc.isUndefined(input) && input.length > 2) {
			let cityList = CommonFunc.searchCity(input.trim());
			const cityOptions = cityList.map((city) => {
				return {...city, label: city.name, value: city.id}
			});
			this.setState({
				cityOptions,
			});
			return callback(cityOptions);
		}
		return callback([]);
	}

	handleClickSearch = () => {
		const {city} = this.state;
		fetchWeatherDetails(city.value).then((cityData) => {
      		this.setState({
      			cityData,
      		});
    	});
	}

	render() {
		const {cityOptions, city, cityData} = this.state;
		return (
			<div className='home'>
				<SearchPanel
					onCityChange={this.handleCityChange}
					handleCitySearch={this.handleCitySearch}
					cityOptions={cityOptions}
					city={city}
					handleSearch={this.handleClickSearch}
				/>
				<div className='weather-card-wrapper'>
					{
						cityData ? (<WeatherCard {...cityData}/>) : null
					}
				</div>
			</div>
		)
	}
}

export default WeatherHome;