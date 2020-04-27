import React, {Component} from 'react';
import '../styles/main.scss';
import Async from 'react-select/async';

class SearchPanel extends Component {

	handleCityChange = (city) => {
		this.props.onCityChange && this.props.onCityChange(city)
	}

	render() {
		const {cityOptions, handleCitySearch, handleSearch, city} = this.props;
		return (
			<div className='search-panel'>
				<div className='search-city'>
					<Async
						className='city-select'
						name="citySelect"
						defaultInputValue=""
						isSearchable={true}
						value={ city }
						loadOptions={handleCitySearch}
						onChange={ this.handleCityChange }
						placeholder="Select city..."
						backspaceRemoves={ true }
						options={cityOptions}
					/>
					<button className='search-btn' onClick={handleSearch}>Search</button>
				</div>
			</div>
		)
	}
}

export default SearchPanel;