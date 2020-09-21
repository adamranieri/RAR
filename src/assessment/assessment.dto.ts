import { JUnitTest } from "./test-models"

export class AssessmentDTO{

    associate:string
    evaluationName:string
    junitTests:Array<JUnitTest>
    
}