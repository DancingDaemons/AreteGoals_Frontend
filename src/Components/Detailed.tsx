import {Alert, Box, Button, Grid, Stack} from "@mantine/core";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Detailed(){
    const [status, setStatus] = useState(0);
    const [detail, setDetail] = useState(false);
    const [update, setUpdate] = useState({
        "aim": "",
        "category": "",
        "description": "",
        "quantitativeType": "",
        "metric": ""
    })

    useEffect(()=> {
        setTimeout(()=>{
            // notify()
            setStatus(0)
        }, 5000)
    },[status])

    // function notify(){
    //     if(status === 200){
    //         return(
    //             <Alert variant="filled" severity="success" >
    //                 <AlertTitle>Success</AlertTitle>
    //             </Alert>
    //         )
    //     } else if( status >= 400){
    //         return (
    //             <Alert variant="filled" severity="error">
    //                 <AlertTitle>Error</AlertTitle>
    //             </Alert>
    //         )
    //     }
    // }

    // async function saveChanges(){
    //     await axios.patch(`http://localhost:8080/goal/${props.detailed.id}`,{
    //         "aim": update.aim,
    //         "category": update.category,
    //         "description": update.description,
    //         "quantitativeType": update.quantitativeType,
    //         "metric": update.metric
    //     }).then(function (response) {
    //         console.log(response)
    //         setStatus(response.status)
    //         props.getGoals();
    //         setDetail(false);
    //     }).catch(function (error){
    //         console.log(error)
    //     });
    // }

    // async function deleteGoal(){
    //     await axios.delete(`http://localhost:8080/goal/${props.detailed.id}`)
    //         .then(function (response) {
    //             console.log(response);
    //             setStatus(response.status)
    //             props.getGoals();
    //             setDetail(false);
    //         }).catch(function (error){
    //             setStatus(error.response.status)
    //             props.getGoals();
    //             console.log(error)
    //     });
    // }

    return(
        <>
            {/*{detail === false ?*/}
            {/*    <ListCondense goals={props.goals} setUpdate={setUpdate} setDetail={setDetail} />*/}
            {/*    :*/}
            {/*    <Box*/}
            {/*        sx={{*/}
            {/*            bgcolor:"secondary.main",*/}
            {/*            opacity: [0.9, 0.8, 0.7],*/}
            {/*            width: '80%'*/}
            {/*        }}>*/}
            {/*        <Box>*/}
            {/*            {notify()}*/}
            {/*            <Grid container spacing={12}>*/}
            {/*                <Grid item xs={6}>*/}
            {/*                    <Stack spacing = {4}>*/}
            {/*                        <Typography gutterBottom variant="h5" component="div">*/}
            {/*                            Goal: {update.aim}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="body1" color="text.secondary">*/}
            {/*                            Category: {update.category}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="body1" color="text.secondary">*/}
            {/*                            Description: {update.description}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="body1" color="text.secondary">*/}
            {/*                            Quantitative Type: {update.quantitativeType}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="body1" color="text.secondary">*/}
            {/*                            Metric: {update.metric}*/}
            {/*                        </Typography>*/}
            {/*                    </Stack>*/}
            {/*                </Grid>*/}
            {/*                <Grid item xs={6} >*/}
            {/*                    <Stack spacing={2}>*/}
            {/*                        <TextField id="outlined-basic" label="IndividualGoal" variant="filled"*/}
            {/*                                   name = "aim" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}

            {/*                        <TextField id="outlined-basic" label="IndividualGoal" variant="filled"*/}
            {/*                                   name = "aim" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}

            {/*                        <TextField id="outlined-basic" label="Category" variant="filled"*/}
            {/*                                   name = "category" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}

            {/*                        <TextField id="outlined-basic" label="Description" variant="filled"*/}
            {/*                                   name = "description" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}

            {/*                        <TextField id="outlined-basic" label="Type of Quantification" variant="filled"*/}
            {/*                                   name = "quantitativeType" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}

            {/*                        <TextField id="outlined-basic" label="Metric" variant="filled"*/}
            {/*                                   name = "metric" onChange={(e)=>{setUpdate({...update, [e.target.name]:e.target.value})}}/>*/}
            {/*                    </Stack>*/}
            {/*                </Grid>*/}
            {/*            </Grid>*/}
            {/*            <Grid item xs ={12} display ={"flex"} justifyContent={"center"}>*/}
            {/*                <Button variant="contained" onClick={()=>{saveChanges()}} > Save </Button>*/}
            {/*                <Button variant="contained" onClick={()=>{deleteGoal()}} > Delete </Button>*/}
            {/*            </Grid>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*}*/}
        </>
    )
}

