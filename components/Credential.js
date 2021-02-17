import credentialStyles from "../styles/Credential.module.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";

// TASK 2 BUTTON
// TASK 3 styling with button component from Material-UI

// functional component that provides name and email address
function Credential() {
	// toggle over name
	const [nickname, setNickname] = useState(false);

	return (
		<div className={credentialStyles.container}>
			{nickname ? <h2>Chris </h2> : <h2>Christian Dinata</h2>}
			<Button
				variant="contained"
				color="secondary"
				onClick={() => {
					setNickname(!nickname);
				}}>
				Change name
			</Button>
			<h4>cdinata6@gmail.com</h4>
		</div>
	);
}

export default Credential;
