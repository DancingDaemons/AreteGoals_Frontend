import React, {useEffect, useState} from "react";
import {Button, Card, Grid, TextInput} from "@mantine/core";
import axios from "axios";
import {Goal} from "../Pages/Goals";

interface IndividualGoalProps {
    goal : Goal
}

 export default function IndividualGoal(props: IndividualGoalProps) {
    //  const [actual, setActual] = useState("")
    //  const [dayLog, setDayLog] = useState({})
    //
    //  useEffect(() => {
    //     getDayLog();
    // },[])

    async function getDayLog() {
        // await axios.get(`http://localhost:8080/log/${props.goal.id}`)
        //     .then(function (response: { data: React.SetStateAction<{}>; }) {
        //         console.log(response);
        //         setDayLog(response.data)
        //     }).catch(function (error){
        //         console.log(error)
        //     });
    }


    async function markCompleted(){
        // await axios.patch(`http://localhost:8080/log/${dayLog.id}`,{
        //     "complete": true,
        //     "actual": actual
        // }).then(function (response) {
        //     console.log(response);
        //     getDayLog();
        // }).catch(function (error){
        //     console.log(error)
        // });

    }

    return(
        <Card >
                <Grid >
                    <Grid.Col>
                            {props.goal.aim}
                    </Grid.Col>
                    <Grid.Col >
                            {props.goal.category}
                    </Grid.Col>
                    <Grid.Col>
                            {props.goal.description}
                    </Grid.Col>
                    {/*<Grid.Col>*/}
                    {/*    {dayLog.complete === true ?*/}
                    {/*            {dayLog.actual}*/}
                    {/*    :*/}
                    {/*    <TextInput*/}
                    {/*        required*/}
                    {/*        name="actual"*/}
                    {/*        label="Actual"*/}
                    {/*        type="actual"*/}
                    {/*        id="actual"*/}
                    {/*        value={actual}*/}
                    {/*        onChange ={(e)=>{setActual(e.target.value)}}*/}
                    {/*    />*/}
                    {/*    }*/}
                    {/*</Grid.Col>*/}
                    {/*<Grid.Col> */}
                    {/*    {dayLog.delta === "" ?*/}
                    {/*        "" :*/}
                    {/*        dayLog.delta*/}
                    {/*    }*/}
                    {/*</Grid.Col>*/}
                    {/*<Grid.Col>*/}
                    {/*    {dayLog.complete === true ?*/}
                    {/*        <CheckCircleSharpIcon sx={{color:"success.main"}}/> :*/}
                    {/*        <CheckCircleSharpIcon onClick={()=>{markCompleted()}} > Mark Complete </CheckCircleSharpIcon>*/}
                    {/*    }*/}
                    {/*</Grid.Col>*/}
                </Grid>
        </Card>
    )
}