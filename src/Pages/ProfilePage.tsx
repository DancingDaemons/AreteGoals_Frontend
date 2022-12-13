import React, {useEffect, useState} from "react";
import {Card, CardContent, Grid, Paper, Stack, Typography} from "@mui/material";
import mtImg from '../Images/snowMt.png'
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function ProfilePage(props){
    const [user, setUser] = useState({})

    let navigate = useNavigate();

    useEffect(()=>{
        if(props.userId > 0) {
            getUser()
        }else {
            navigate('/')
        }
    },[])

    async function getUser(){
        await axios.get(`http://localhost:8080/user/${props.userId}`)
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })

    }


    const styles = {
        paperContainer: {
            backgroundImage: `url(${mtImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 5,
            width:'100%',
            height:'100vh'
        }
    };

    const profileCard = (props) =>{
        return (
        <Card>
            <CardContent>
                <Grid container spacing={2} justifyContent={"center"}>

                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.primary">
                            User Name: {user.firstName} {user.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Number of aims: {props.goals.length}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        );
    }

    return(
        <Paper style = {styles.paperContainer} >
            <Grid container spacing={2}>
                <Grid item xs ={5} margin={1}>
                    <Grid item xs={12} display="flex"  justifyContent="center">
                        <Stack>
                            <Typography justifyContent={"center"} >
                                User info
                            </Typography>
                            {profileCard(props)}
                        </Stack>
                    </Grid>
                </Grid>
                <Grid item xs ={5} margin={1}>
                    <Grid item xs={12}  justifyContent="center">
                        <Stack>
                            <Typography justifyContent={"center"} >
                                Goals
                            </Typography>
                            {props.goals.length === 1 ? "None Defined" :
                                props.goals.map((goal) => {
                                    return (
                                        <Card>
                                            <CardContent>
                                                <Grid container spacing={4}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="body1" color="text.primary">
                                                            {goal.aim}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {goal.category}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {goal.description}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}