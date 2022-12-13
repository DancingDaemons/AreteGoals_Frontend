import * as React from "react";
import {
    Box,
    Button,
    Grid,
    Paper,
    Container,
    Avatar,
    Checkbox,
    Alert,
} from "@mantine/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import mtImg from "../Images/green_mountain.png";
import {ThemeProvider} from "@mui/material/styles";
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function HomePage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(0);

    let navigate = useNavigate();
    function handleClick(e) {
        navigate(`${e.target.value}`)
    }

    useEffect(()=> {
        notify()
    },[status])

    function notify(){
        if(status === 200){
           return(
               <Alert variant="filled" severity="success">
                   <AlertTitle>Success</AlertTitle>
           </Alert>)
        } else if( status >= 400){
            return (
                <Alert variant="filled" severity="error">
                    <AlertTitle>Error</AlertTitle>
            </Alert>)
        }
    }

    async function checkLogin(e){
        e.preventDefault();
        await axios.post("http://localhost:8080/user/login", {
            "email": email,
            "password": password
        }).then(response => {
            setStatus(response.status)
            if(response.data > 0) {
                const id = response.data;
                console.log("Id is: " + id)
                props.setUserId(id)
                navigate("/aims")
            }
        }).catch(function (error){
            setStatus(error.response.status)
            alert("Invalid Login")
            console.log(error)
        })

    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     checkLogin()
    // };


    return (
        <ThemeProvider  theme={props.theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />

                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${mtImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        { notify()}
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={(e)=>checkLogin(e)} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange ={(e)=>{setEmail(e.target.value)}}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange ={(e)=>{setPassword(e.target.value)}}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <NavLink onClick={() => handleClick()} to="/register"  variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </NavLink>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
    );
}
//<Paper style = {styles.paperContainer}></Paper>
