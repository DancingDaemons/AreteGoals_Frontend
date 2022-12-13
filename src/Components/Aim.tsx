import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import axios from "axios";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

export default function Aim(props){
    const [actual, setActual] = useState("")
    const [dayLog, setDayLog] = useState({})

    useEffect(() => {
        getDayLog();
    },[])

    async function getDayLog() {
        await axios.get(`http://localhost:8080/log/${props.goal.id}`)
            .then(function (response) {
                console.log(response);
                setDayLog(response.data)
            }).catch(function (error){
                console.log(error)
            });
    }


    async function markCompleted(){
        await axios.patch(`http://localhost:8080/log/${dayLog.id}`,{
            "complete": true,
            "actual": actual
        }).then(function (response) {
            console.log(response);
            getDayLog();
        }).catch(function (error){
            console.log(error)
        });

    }

    return(
        <Card >
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item xs={3}>
                        <Typography variant="body1" color="text.primary">
                            {props.goal.aim}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" color="text.secondary">
                            {props.goal.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} display={"flex"} justifyContent={"center"}>
                        <Typography variant="body2" color="text.secondary">
                            {props.goal.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
                        {dayLog.complete === true ?
                            <Typography variant="body1" color="text.primary">
                                {dayLog.actual}
                            </Typography>
                        :
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="actual"
                            label="Actual"
                            type="actual"
                            id="actual"
                            value={actual}
                            onChange ={(e)=>{setActual(e.target.value)}}
                        />
                        }
                    </Grid>
                    <Grid item xs = {1} display={"flex"} justifyContent={"center"}>
                        {dayLog.delta === "" ?
                            "" :
                            dayLog.delta
                        }
                    </Grid>
                    <Grid item xs = {1} display={"flex"} justifyContent={"center"}>
                        {dayLog.complete === true ?
                            <CheckCircleSharpIcon sx={{color:"success.main"}}/> :
                            <CheckCircleSharpIcon onClick={()=>{markCompleted()}} > Mark Complete </CheckCircleSharpIcon>
                        }
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}