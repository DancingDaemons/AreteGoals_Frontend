import ListGoals from "../Components/ListGoals";
import axios from "axios";
import {useEffect, useState} from "react";

export interface Log {
    date: string,
    complete: boolean,
    realized: string,
    metricRecord: number
}

// zodSchme stuff
// type Goal = z.infer<typeof Schema>
// eslint for typeScript

export interface Goal {
    id: string,
    aim: string,
    category: string,
    description: string,
    quantitativeType: string,
    metric: number,
    logs: Log[]
}
export default function Goals(){
    const [goals, setGoals] = useState<Goal[]>()
    const [status, setStatus] = useState(-1)

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
        <>
            {goals ?    <ListGoals goals={goals}/> : <></>}
        </>
    )
}
