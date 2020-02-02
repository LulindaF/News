import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
	const classes = useStyles();
	return (
			<Typography className={classes.info}>
				<Typography  className={classes.info} variant="h6" gutterBottom>OpenHouse News</Typography>
				<Typography variant="subtitle1" component="p">Be Informed</Typography>
				<Typography variant="body2" color="textSecondary">
					{'Copyright © '}
					<Link color="inherit" href="/">
						OpenHouse News
          </Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: 'gainsboro',
		padding: theme.spacing(5),
	},
	menu: {
	},
	info: {
		flexGrow: 1
	},
}));


export default function Footer() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<footer className={classes.footer}>
				<Copyright />
			</footer>
		</React.Fragment>
	);
}
