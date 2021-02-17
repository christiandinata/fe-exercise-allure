import Credential from "../components/Credential";
import aboutmeStyles from "../styles/About.module.css";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// TASK 1 /about-me page
// TASK 3 styling with typography component from Material-UI
// TASK 4 styling with makeStyles function to change typography
   // font color to pink

const useStyles = makeStyles({
	fontColor: {
		color: "pink",
	},
});

const aboutme = () => {
	const classes = useStyles();
	return (
		<>
			<Head>
				<title>About Me</title>
			</Head>
			<div className={aboutmeStyles.container}>
				<Typography
				className={classes.fontColor}>
					it's been always nice to see new faces
				</Typography>
				<Typography className={classes.fontColor}>
					Introduce me, I'm
				</Typography>
				{/* fullname/nickname and email address */}
				<Credential />
			</div>
		</>
	);
};

export default aboutme;
