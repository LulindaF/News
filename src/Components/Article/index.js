import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


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
  },
  breadcrumb: {
		backgroundColor: 'gainsboro',
		paddingLeft: theme.spacing(4),
	}
}));

const cards = [1];

export default function Article() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/everything">
          Headlines
        </Link>
        <Typography
          color="textPrimary"
          aria-current="page">
          Article
        </Typography>
      </Breadcrumbs>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography className={classes.typography}>
                <p>
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                </p>
                <p>
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                </p>
                <p>
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                  This is a media card. You can use this section to describe the content.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
