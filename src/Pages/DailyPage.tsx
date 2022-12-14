import React, {useEffect, useState} from "react";
import ListAims from "../Components/ListAims";
import Detailed from "../Components/Detailed";
import mtImg from "../Images/jungleMt.png";
import CreateGoal from "../Components/CreateGoal";
import {useNavigate} from "react-router-dom";
import {Box, Grid} from "@mantine/core";

export default function DailyPage(){
    let navigate = useNavigate();


    const styles = {
        paperContainer: {
            flexGrow: 1,
            backgroundImage: `url(${mtImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 5,
            height:'100vh'
        }
    };

        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>

            </Box>
        );
    }



