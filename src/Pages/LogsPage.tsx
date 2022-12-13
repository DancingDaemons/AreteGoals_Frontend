import mtImg from "../Images/snowMt.png";
import {Paper} from "@mui/material";
import AimTable from "../Components/AimTable";

export default function LogsPage(props){

    const styles = {
        paperContainer: {
            flexGrow: 1,
            backgroundImage: `url(${mtImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            padding: 5,
            height:'100vh'
        }
    };

    return (
        <Paper style = {styles.paperContainer}>
            {props.goals.length === 1 ? "No Records" : <AimTable goals={props.goals} userId ={props.userId}/> }
        </Paper>
    )

}
// {logs.length === 1 ? "No Records" : <CategoryTable logs={logs} userId ={props.userId}/> }