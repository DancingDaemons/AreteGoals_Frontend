import IndividualGoal from "./IndividualGoal";
import React from "react";
import {Box} from "@mantine/core";
import {Goal} from "../Pages/LogsPage";

interface ListAimsProps {
    goals: Goal[]
}

export default function ListAims(props: ListAimsProps){

    return(
    <Box>
        <ul>
            {props.goals.map((goal) => {return <IndividualGoal
                goal={goal}
            />
            })}
        </ul>
    </Box>
    )
}

/*
{props.goals.filter((goal) => {
                return goal.complete ===  props.filterOnComplete})
            .map(goal => { return <IndividualGoal goal={goal} setDetailed={props.setDetailed} key={goal.id}/>
            })}
 */
