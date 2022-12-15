import * as React from 'react';
// import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
// import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import {useEffect, useState} from "react";
//
// export default function AimTable(props) {
//     const [today, setToday] = useState(new Date().toISOString().substring(0,10))
//
//     return (
//         <TableContainer component={Paper}>
//
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell> IndividualGoal </TableCell>
//                         <TableCell align="right"> Category </TableCell>
//                         <TableCell align="right"> Description </TableCell>
//                         <TableCell align="right">Actual</TableCell>
//                         <TableCell align="right">Complete</TableCell>
//                         <TableCell align="right">Delta</TableCell>
//                         <TableCell align="right">Date</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 {props.goals.map((goal) => (
//                     <TableBody key={goal.id}>
//                         {goal.logs.filter((log) => {
//                             return log.date < today
//                         }).map(log => (
//                         <TableRow key={log.id}>
//                             <TableCell component="th" scope="row"> {goal.aim}</TableCell>
//                             <TableCell align="right">{goal.category}</TableCell>
//                             <TableCell align="right">{goal.description}</TableCell>
//                             <TableCell align="right">{log.actual}</TableCell>
//                             <TableCell align="right">{log.complete === true ?
//                                 <DoneOutlineIcon sx={{color:"success.main"}}/> : <CloseSharpIcon sx={{color:"error.main"}}/>}
//                             </TableCell>
//                             <TableCell align="right">{log.delta}</TableCell>
//                             <TableCell align="right">{log.date}</TableCell>
//                         </TableRow>
//                         ))}
//                 </TableBody>
//                 ))}
//             </Table>
//         </TableContainer> );
// }
/*
{props.logs.records.filter((record)=>{
       return record.includes(goalId)}).map((el) => ( .... )
 */