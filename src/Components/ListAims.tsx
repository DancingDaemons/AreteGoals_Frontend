import Aim from "./Aim";
import React from "react";
import {Box} from "@mui/material";

export default function ListAims(props){

    return(
    <Box>
        <ul>
            {props.goals.map((goal) => {return <Aim
                goal={goal}
                key={goal.id}
            />
            })}
        </ul>
    </Box>
    )
}

/*
{props.goals.filter((goal) => {
                return goal.complete ===  props.filterOnComplete})
            .map(goal => { return <Aim goal={goal} setDetailed={props.setDetailed} key={goal.id}/>
            })}
 */
