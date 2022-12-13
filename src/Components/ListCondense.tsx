import React from "react";
import {Box} from "@mantine/core";
import Mini from "./Mini";

export default function ListCondense(props){

    return(
        <Box>
            <ul>
                {props.goals.map((goal) => {return <Mini
                    setUpdate={props.setUpdate}
                    setDetail={props.setDetail}
                    goal={goal}
                    key={goal.id}
                />
                })}
            </ul>
        </Box>
    )
}
