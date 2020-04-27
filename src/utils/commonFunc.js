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
			let d = new Date(timestamp*1000);
			console.log("d: ", d)
			return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
		}
		return ''
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
			let d = new Date(timestamp*1000);
			return `${d.getHours()}:${d.getMinutes()}`;
		}
		return ''
	}

	convertFarhCelcius = (temp) => {
		if (!this.isUndefined(temp)) {
			return ((temp - 32)*5/9).toFixed(2);
		}
		return '';
	}

	getDayMonth = (timestamp) => {
		if (!this.isUndefined(timestamp)) {
			let d = new Date(timestamp*1000);
			return `${d.getDate()}/${d.getMonth()+1}`;
		}
		return ''
	}
}

export default new CommonFunc;