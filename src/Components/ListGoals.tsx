import IndividualGoal from "./IndividualGoal";
import React from "react";
import {Box} from "@mantine/core";
import {Goal} from "../Pages/Goals";

interface ListGoalsProps {
    goals: Goal[]
}

export default function ListGoals(props: ListGoalsProps){

   // const uniqueIds = [...new Set( goals.map(goal => goal.id)) ];

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
