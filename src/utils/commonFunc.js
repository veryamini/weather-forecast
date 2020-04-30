import CITY_LIST from './cityList';

class CommonFunc {

	isUndefined = (val) => {
		if (val === undefined) {
			return true;
		}
		return false;
	}

	getFormattedDate = (timestamp) => {
		if (!this.isUndefined(timestamp)) {
			const currentDate = new Date();
			let d = new Date((timestamp + (currentDate.getTimezoneOffset() * 60))*1000);
			return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
		}
		return '';
	}

	searchCity = (cityString) => {
		if (cityString.length > 2) {
			return CITY_LIST.filter((a) => {
				return a.name.toLowerCase().includes(cityString.toLowerCase(), 0);
			});
		}
	}

	getTime = (timestamp) => {
		if (!this.isUndefined(timestamp)) {
			const currentDate = new Date();
			let d = new Date((timestamp + (currentDate.getTimezoneOffset() * 60))*1000);
			// d = Date.UTC(d);
			return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
		}
		return '';
	}

	convertFarhCelcius = (temp) => {
		if (!this.isUndefined(temp)) {
			return ((temp - 32)*5/9).toFixed(2);
		}
		return '';
	}

	getDayMonth = (timestamp) => {
		if (!this.isUndefined(timestamp)) {
			const currentDate = new Date();
			let d = new Date((timestamp + (currentDate.getTimezoneOffset() * 60))*1000);
			return `${d.getDate()}/${d.getMonth()+1}`;
		}
		return '';
	}

	convertKelvinCelcius = (temp) => {
		if (!this.isUndefined(temp)) {
			return (temp - 273.15).toFixed(2);
		}
		return '';
	}
}

export default new CommonFunc;