import React, {useEffect, useState} from "react";
import mtImg from "../Images/moonMt.png";
import {useNavigate} from "react-router-dom";
import {Box, Grid, Image, Paper} from "@mantine/core";
import {Goal} from "./Goals";
import IndividualGoal from "../Components/IndividualGoal";
import axios from "axios";

interface HerculesProps {
    goals: Goal[]
}

export default function Hercules(){
    const [goals, setGoals] = useState<Goal[]>()
    const [status, setStatus] = useState(-1)
    let navigate = useNavigate();

    useEffect(()=>{
        fetchAllUserGoals()
    }, [])

    async function fetchAllUserGoals(){ //needs to fetch individual users goals, from login after auth
        await axios.get(`http://localhost:8080/goal`)
            .then(function (response) {
                console.log(response)
                setStatus(response.status)
                setGoals(response.data)
            }).catch(function (error){
                setStatus(error.response.status)
                console.log(error)
            });
    }
        return (
            <Box sx={{ width: '100%', typography: 'body1'}}>
                <Grid>
                    <Grid.Col span={6}>
                        {goals === undefined ? "Do Nothing" :
                        goals.map((goal) => {return <IndividualGoal
                            goal={goal}
                            key={goal.id}
                        />
                        })}
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            height= "100vh"
                            src= {mtImg}
                            radius="sm"
                        />
                    </Grid.Col>
                </Grid>
            </Box>
        );
    }



