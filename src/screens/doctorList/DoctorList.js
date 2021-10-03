import {Button, makeStyles, React, Typography, useEffect, useState, Grid, Container} from "../../component";
import {appNotification} from "../../common/notification/app-notification";
import validator from "validator";
import {environment} from "../../environment";
import {getDoctorsApi} from "../../auth/authDispatcher";
import Paper from '@material-ui/core/Paper';
import {Rating} from 'react-simple-star-rating'

const useStyles = makeStyles((theme) => ({


    list_parent: {
        marginTop: theme.spacing(1),
    },
    list_theme: {
        display: "flex",
        width:'40%',
        marginTop: theme.spacing(1),

    },
    paper_theme: {
        width:450,
        marginTop:theme.spacing(2),
        padding:theme.spacing(3),
        height:180,
        alignItems: 'center',
    },

    button_theme:{
        height:50
    }

}));

function DoctorList(props) {


    const classes = useStyles();

    let isFirstTime = false;

    const [data, setData] = useState({doctors: [], isFetching: false});

    async function getDoctors() {
        //event.preventDefault();
        console.log("getDoctors", "getDoctors call")

        const speciality = "CARDIOLOGIST";
        setData({doctors: data.doctors, isFetching: true});

        getDoctorsApi(speciality)
            .subscribe((response) => {


                console.log("getDoctors result ", response)
                try {
                    setData({doctors: response, isFetching: false});
                } catch (e) {
                    console.log(e);
                    setData({doctors: data.doctors, isFetching: false});
                }


            }, (error => {
                appNotification.showError(error)


            }))


    }


    useEffect(() => {
        console.log("useEffect", "useEffect call isFirstTime=" + isFirstTime)

        // if (!isFirstTime)
        getDoctors();

        //isFirstTime=true;

    }, [])


    const handleClickBookAppoint = () => {
    };

    const handleClickViewDetails = () => {

    };


    return (<React.Fragment>

        <Container component="main" maxWidth="xs">

        {
            (data.isFetching) ?
                <div>Loading ... </div> : <div classes={classes.list_parent}>
                    <ul classes={classes.list_theme}>
                        {data.doctors.map(item => (


                            <Paper elevation={0} className={classes.paper_theme}>


                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography>
                                            Doctor Name:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {item.firstName + " " + item.lastName}
                                        </Typography>
                                    </Grid>

                                </Grid>


                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography>
                                            Speciality:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {item.speciality}
                                        </Typography>
                                    </Grid>

                                </Grid>


                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography>
                                            Rating:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>


                                        <Rating

                                            ratingValue={item.rating}
                                            size={20}
                                            label
                                            transition
                                            fillColor='orange'
                                            emptyColor='gray'
                                            className='foo'

                                        />
{/*
                                        <StarRating name="react-star-rating" editing={false} totalStars={item.rating} />
*/}

                                    </Grid>

                                </Grid>


                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button  classes={classes.button_theme} color="primary" variant="contained" onClick={ handleClickBookAppoint}>
                                            BOOK APPOINTMENT
                                        </Button>


                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button    classes={classes.button_theme} color="primary" variant="contained" onClick={ handleClickViewDetails}>
                                               VIEW DETAILS
                                        </Button>
                                    </Grid>

                                </Grid>


                            </Paper>


                        ))}
                    </ul>
                </div>
        }
        </Container>


    </React.Fragment>)

}

export default DoctorList