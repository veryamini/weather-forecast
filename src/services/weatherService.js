import {API_KEY} from '../utils/constants.js';

const URL = 'http://api.openweathermap.org/data/2.5/forecast?id=CITY&appid=API_KEY'

export default async function fetchWeatherDetails(cityId) {
	const url = URL.replace(/CITY/, cityId).replace(/API_KEY/, API_KEY);
	const fetchWeather = await fetch(url);
	const res = await fetchWeather.json();
	let list = [];
	res.list.forEach((a) => {
		let item = {
			'temp': a.main,
			'weather': a.weather ? a.weather[0] : undefined,
			'date': a.dt,
		};
		list.push(item);
	});
	const cityData = {
  			weather: res.list[0].weather[0],
  			city: res.city,
  			temp: res.list[0].main,
  			list,
  			date: res.list[0].dt,
  		};
	return cityData;
}
