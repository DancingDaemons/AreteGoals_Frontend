import React, {useEffect, useState} from "react";
import ListGoals from "../Components/ListGoals";
import Detailed from "../Components/Detailed";
import mtImg from "../Images/moonMt.png";
import {useNavigate} from "react-router-dom";
import {Box, Grid, Image, Paper} from "@mantine/core";
import {Goal} from "./Goals";
import IndividualGoal from "../Components/IndividualGoal";

interface HerculesProps {
    goals: Goal[]
}

export default function Hercules(){
    let navigate = useNavigate();

        return (
            <Box sx={{ width: '100%', typography: 'body1'}}>
                <Grid>
                    <Grid.Col span={6}>
                        Present only today's Goal record
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



