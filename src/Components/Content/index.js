import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	button: {
		textTransform: "none",
	},
	typography: {
		textAlign: 'justify'
	}
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Content() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={1}>
						{cards.map(card => (
							<Grid item key={card} xs={12} sm={6} md={3}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
                    </Typography>
										<Typography className={classes.typography}>
											This is a media card. You can use this section to describe the content.
                    </Typography>
									</CardContent>
									<CardActions>
										<Link color="inherit" href="/article">
											<Button className={classes.button} size="small" variant="outlined" color="primary">
												Read More
                    </Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}
