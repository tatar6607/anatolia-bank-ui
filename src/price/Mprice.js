import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import SaveIcon from '@material-ui/icons/Save';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',

        },
    },



    cardMedia: {
        paddingTop: '52.25%',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    liste: {
        margin: theme.spacing(0, 0),
        color:"#1c54b2",
        backgroundColor:"#e8eaf6",
       
       
        
    },
    heroContent: {
        padding: theme.spacing(2, 2, 3),
       
        borderRadius:"20%",
    },
    cardHeader: {
        fontSize: "34px",
        // backgroundColor:
        //     theme.palette.type === 'light' ? theme.palette.grey[500] : theme.palette.grey[700],
            backgroundColor:"#ff9800",
        height: 70,
        color: "blue",
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
       paddingTop: theme.spacing(3),
       marginBottom: theme.spacing(2),
    },
    buttondiv:{
        backgroundColor:"#ff9800",
    }

}));

const tiers = [
    {
        title: 'Basic',
        subheader: 'Most popular',
        image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg",
        price: '5.50',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],

    },
    {
        title: 'Premium',
        image: "https://cdn.pixabay.com/photo/2013/07/18/10/56/graph-163509_960_720.jpg",
        subheader: 'Most popular',
        price: '7.50',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],

    },
    {
        title: 'Advance',
        subheader: 'Most interprising',
        image: "https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_960_720.jpg",
        price: '9.50',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],


    },
];

export default function Mprice() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />


            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h2" variant="h3" align="center" color="textPrimary" color="#ff9100">
                    Price
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    The right banking package for you.Get the privilege of choose between our many banking Packages
                    &apos;and enjory services that will reward you and fit your lifestyle.
                </Typography>
            </Container>

            <Container class={classes.border} maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (

                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>

                                <CardHeader

                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center', color: 'primary' }}

                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={tier.image}
                                    title={tier.title}
                                />
                                <CardContent class={classes.liste}>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h4" variant="h5" color="textPrimary" backgroundcolor="textprimary">
                                            {tier.price}%
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /mo
                                        </Typography>
                                    </div>
                                 
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                  
                                </CardContent>
                                <CardActions class={classes.buttondiv}>
                                    <Skeleton animation={false} />
                                    <Button fullWidth
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className={classes.button}
                                        startIcon={<SaveIcon />} className={classes.root}>
                                        <Skeleton variant="text" /> Book Now
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </React.Fragment>
    );
}