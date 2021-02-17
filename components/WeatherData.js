import weatherStyles from "../styles/WeatherData.module.css";

function WeatherData({weather}) {
	return (
		<>
			<div className={weatherStyles.containerWrapper}>
				<div className={weatherStyles.location}>
					{weather.location.name}, {weather.location.region},{" "}
					{weather.location.country}
				</div>
				<div className={weatherStyles.containerInner}>
					<div className={weatherStyles.imgBox}>
						<img src={weather.current.weather_icons} />
						<p>{weather.current.weather_descriptions}</p>
					</div>
					<div className={weatherStyles.temperature}>
						<p>{weather.current.temperature}°c</p>
					</div>
					<div className={weatherStyles.details}>
						<p>Wind: {weather.current.wind_speed} kmph</p>
						<p>Precip: {weather.current.precip} mm</p>
						<p>Pressure: {weather.current.pressure} mb</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeatherData;
