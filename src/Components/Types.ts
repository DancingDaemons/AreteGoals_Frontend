import {z} from "zod";

export const Log = z.object({
    id: z.string(),
    date: z.string(),
    complete: z.boolean(),
    realized: z.string(),
    metricRecord: z.number()
})
export type LogT = z.infer<typeof Log>


export const Goal = z.object({
    id: z.string(),
    aim: z.string(),
    category: z.string(),
    description: z.string(),
    quantitativeType: z.string(),
    metric: z.number(),
    logs: z.array(Log)
})
export type GoalT = z.infer<typeof Goal>

export const GoalsSchema = z.array(Goal);
export type GoalsSchemaT = z.infer<typeof GoalsSchema>

// zodSchme stuff
// type Goal = z.infer<typeof Schema>
// eslint for typeScript