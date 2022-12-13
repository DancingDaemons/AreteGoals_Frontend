import {Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import React from "react";


export default function Mini(props){

    function goalSelect(){
        props.setUpdate({
            "aim": props.goal.aim,
            "category": props.goal.category,
            "description": props.goal.description,
            "quantitativeType": props.goal.quantitativeType,
            "metric": props.goal.metric
        })
        props.setDetail(true);
    }

    return(
        <Card onClick={()=> {goalSelect()}}>
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {props.goal.aim}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.goal.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.goal.description}
                </Typography>
            </CardContent>
        </Card>
    )
}