import {React,makeStyles,Container}
    from "../../component/index";
import {useHistory} from "react-router-dom";
import  {useState} from 'react';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function Authentication(props) {

    const classes = useStyles();
    const history = useHistory();

   // const dispatch = useDispatch()


    const [userName, set_userName] = useState("")
    const [password, set_password] = useState("")








    return (
        <Container component="main" maxWidth="xs">

            <div >

                <Typography>
                    Hi
                </Typography>

            </div>

        </Container>

    )
}


export default Authentication