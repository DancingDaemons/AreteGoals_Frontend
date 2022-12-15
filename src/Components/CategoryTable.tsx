import {Box, Paper, Table, Tabs} from "@mantine/core";
import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";


export default function CategoryTable() {
    const [value, setValue] = React.useState(0);
    const [categories, setCategories] = useState([]);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    //
    // useEffect(()=> {
    //     getCategories()
    // }, [])

    // async function getCategories(){
    //     await axios.get(`http://localhost:8080/user/${props.userId}/categories`)
    //         .then(response => {
    //             console.log(response.data)
    //             setCategories(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }

    // function categoryTable(cat) {
    //
    //     return (
    //         <TableContainer component={Paper}>
    //             <Table sx={{minWidth: 650}} aria-label="simple table">
    //                 <TableHead>
    //                     <TableRow>
    //                         <TableCell>Category</TableCell>
    //                         <TableCell align="right">IndividualGoal</TableCell>
    //                         <TableCell align="right">Desc.</TableCell>
    //                         <TableCell align="right">Actual</TableCell>
    //                         <TableCell align="right">Complete</TableCell>
    //                         <TableCell align="right">Delta</TableCell>
    //                         <TableCell align="right">Date</TableCell>
    //                     </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                     {props.logs.filter((log) => {
    //                         return log.category.includes(cat)
    //                     }).map((el) => (
    //                         <TableRow
    //                             key={el.id}
    //                             sx={{'&:last-child td, &:last-child th': {border: 0}}}
    //                         >
    //                             <TableCell component="th" scope="row">
    //                                 {el.category}
    //                             </TableCell>
    //                             <TableCell align="right">{el.aim}</TableCell>
    //                             <TableCell align="right">{el.description}</TableCell>
    //                             <TableCell align="right">{el.actual}</TableCell>
    //                             <TableCell align="right">{el.complete}</TableCell>
    //                             <TableCell align="right">{el.delta}</TableCell>
    //                             <TableCell align="right">{el.date}</TableCell>
    //                         </TableRow>
    //                     ))}
    //                 </TableBody>
    //             </Table>
    //         </TableContainer>
    //     )
    // }

        return (
            <>
                {/*<Box>*/}
                {/*    <Tabs value={value} onChange={handleChange}*/}
                {/*          variant="scrollable"*/}
                {/*          scrollButtons="auto"*/}
                {/*          aria-label="scrollable auto tabs example">*/}
                {/*        {categories.map((category, index) => {*/}
                {/*            const {label} = category;*/}
                {/*            return (*/}
                {/*                <Tab*/}
                {/*                    value={label}*/}
                {/*                    label={category}*/}
                {/*                    key={index}*/}
                {/*                />)})}*/}
                {/*    </Tabs>*/}
                {/*</Box>*/}
                {/*<Box sx={{ padding: 2 }}>*/}
                {/*    {value === 0 && (*/}
                {/*        <Box>*/}
                {/*            {categoryTable(categories[0])}*/}
                {/*        </Box>*/}
                {/*    )}*/}
                {/*    {value === 1 && (*/}
                {/*        <Box>*/}
                {/*            {categoryTable(categories[1])}*/}
                {/*        </Box>*/}
                {/*    )}*/}
                {/*    {value === 2 && (*/}
                {/*        <Box>*/}
                {/*            {categoryTable(categories[2])}*/}
                {/*        </Box>*/}
                {/*    )}*/}
                {/*</Box>*/}
            </>
        )
}
