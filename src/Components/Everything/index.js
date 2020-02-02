import React from 'react';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles(theme => ({
  breadcrumb: {
		backgroundColor: 'gainsboro',
		paddingLeft: theme.spacing(4),
	},
}));

export default function Everything() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Header />
			<Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				<Link color="inherit" href="/">
					Home
        </Link>
				<Link
					color="textPrimary"
					href="/everything"
					aria-current="page">
					Headlines
        </Link>
			</Breadcrumbs>
			<main>
				<Content />
			</main>
			<Footer />
		</React.Fragment>
	);
}
