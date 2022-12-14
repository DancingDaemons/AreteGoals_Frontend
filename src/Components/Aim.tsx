// import React, {useEffect, useState} from "react";
// import {Button, Card, Grid, TextInput} from "@mantine/core";
// import axios from "axios";
// import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
//
 export default function Aim() {
//     const [actual, setActual] = useState("")
//     const [dayLog, setDayLog] = useState({})
//
//     useEffect(() => {
//         getDayLog();
//     },[])
//
//     async function getDayLog() {
//         await axios.get(`http://localhost:8080/log/${props.goal.id}`)
//             .then(function (response: { data: React.SetStateAction<{}>; }) {
//                 console.log(response);
//                 setDayLog(response.data)
//             }).catch(function (error){
//                 console.log(error)
//             });
    }
//
//
//     async function markCompleted(){
//         await axios.patch(`http://localhost:8080/log/${dayLog.id}`,{
//             "complete": true,
//             "actual": actual
//         }).then(function (response) {
//             console.log(response);
//             getDayLog();
//         }).catch(function (error){
//             console.log(error)
//         });
//
//     }
//
//     return(
//         <Card >
//                 <Grid container spacing={2} >
//                     <Grid item xs={3}>
//                             {props.goal.aim}
//                     </Grid>
//                     <Grid item xs={2}>
//                             {props.goal.category}
//                     </Grid>
//                     <Grid item xs={2} display={"flex"} justifyContent={"center"}>
//                             {props.goal.description}
//                     </Grid>
//                     <Grid item xs={3} display={"flex"} justifyContent={"center"}>
//                         {dayLog.complete === true ?
//                                 {dayLog.actual}
//                         :
//                         <TextInput
//                             required
//                             name="actual"
//                             label="Actual"
//                             type="actual"
//                             id="actual"
//                             value={actual}
//                             onChange ={(e)=>{setActual(e.target.value)}}
//                         />
//                         }
//                     </Grid>
//                     <Grid item xs = {1} display={"flex"} justifyContent={"center"}>
//                         {dayLog.delta === "" ?
//                             "" :
//                             dayLog.delta
//                         }
//                     </Grid>
//                     <Grid item xs = {1} display={"flex"} justifyContent={"center"}>
//                         {dayLog.complete === true ?
//                             <CheckCircleSharpIcon sx={{color:"success.main"}}/> :
//                             <CheckCircleSharpIcon onClick={()=>{markCompleted()}} > Mark Complete </CheckCircleSharpIcon>
//                         }
//                     </Grid>
//                 </Grid>
//         </Card>
//     )
// }