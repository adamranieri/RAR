import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Evaluation extends Document{

    @Prop()
    evaluationName:string

}

export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);