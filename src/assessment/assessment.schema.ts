import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { JUnitTest } from './test-models';


@Schema()
export class Assessment extends Document{

    @Prop()
    associate:string;

    @Prop()
    evaluationName:string;

    @Prop()
    junitTests?:Array<JUnitTest>;
 
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);