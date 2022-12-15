import exp from "constants";
import ListAims from "../Components/ListAims";

export interface Log {
    date: Date,
    metricRecord: number
}

export interface Goal {
    aim: string,
    category: string,
    description: string,
    quantitativeType: string,
    metric: number,
    records: Log[]
}
export default function LogsPage(){
    let goal1: Goal = {aim: 'aim1', category: 'category1', description: 'desc1', quantitativeType: 'quantType1', metric: 10, records: [{date: new Date(), metricRecord: 8}, {date: new Date(), metricRecord: 9}]}
    let goal2: Goal = {aim: 'aim2',  category: 'category2', description: 'desc2', quantitativeType: 'quantType2', metric: 100, records: [{date: new Date(), metricRecord: 90}, {date: new Date(), metricRecord: 89}]}
    let mockGoals: Goal[] = [goal1, goal2]

    return (
        <>
            <ListAims goals={mockGoals}/>
        </>
    )
}
