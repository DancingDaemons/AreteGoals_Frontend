import ListGoals from "../Components/ListGoals";
import axios from "axios";
import {useEffect, useState} from "react";
import {GoalT, GoalsSchema, GoalsSchemaT} from "../Components/Types";


export default function Goals(){
    const [goals, setGoals] = useState<GoalT[]>()
    const [status, setStatus] = useState(-1)

    useEffect(()=>{
        fetchAllUserGoals()
    }, [])

    async function fetchAllUserGoals(){ //needs to fetch individual users goals, from login after auth
        await axios.get(`http://localhost:8080/goal`)
            .then(function (response) {
                console.log(response)
                setStatus(response.status)
                setGoals(GoalsSchema.parse(response.data))
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
