import Head from "next/head";
import weatherStyles from "../styles/Weather.module.css";
import WeatherForm from "../components/WeatherForm";
import WeatherData from "../components/WeatherData";

// TASK 5 /weather page to display any city weather

function weather({weather}) {

		return (
			<div className={weatherStyles.container}>
				<Head>
					<title>Weather</title>
				</Head>
				<WeatherForm />
				<WeatherData weather={weather}/>
			</div>
		);

}

// Load in build time
export const getStaticProps = async () => {

	const res = await fetch(
		`http://api.weatherstack.com/current?access_key=00cfb58a23071ca61fa79d1cd394e86c&query=Jambi`
	);
	const weather = await res.json();

	return {
		props: {
			weather,
		},
	};
};


export default weather;
