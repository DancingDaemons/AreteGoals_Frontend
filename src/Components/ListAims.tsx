import Aim from "./Aim";
import React from "react";
import {Box} from "@mantine/core";

export default function ListAims(){

    return(
    <Box>
        <ul>
            {/*{props.goals.map((goal) => {return <Aim*/}
            {/*    goal={goal}*/}
            {/*    key={goal.id}*/}
            {/*/>*/}
            {/*})}*/}
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
