import {useState} from "react";

// BONUS PART

// Stuck on exporting city as global state
// Possible solution: Redux Management State
function WeatherForm() {
    const [city, setCity] = useState("Jambi");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Choose city:</label>
				<select value={city} onChange={handleChange}>
					<option value="Jakarta">Jakarta</option>
					<option value="Bekasi">Bekasi</option>
					<option value="Jambi">Jambi</option>
					<option value="Padang">Padang</option>
				</select>

				<button type="submit" value="Submit">
					submit
				</button>
			</form>
		</div>
	);
}

export default WeatherForm;
// export const name = 'Bekasi'