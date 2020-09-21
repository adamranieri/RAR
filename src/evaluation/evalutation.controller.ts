import { Body, Controller, Get, Post } from "@nestjs/common";
import { EvaluationDTO } from "./evaluation.dto";
import { Evaluation } from "./evaluation.schema";
import { EvaluationService } from "./evaluation.service";


@Controller('evaluations')
export class EvaluationController{

    constructor(private evalService:EvaluationService){}

    @Post()
    async createEvaluation(@Body() evaluationDTO:EvaluationDTO){
        const evaluation:Evaluation = await this.evalService.createEvaluation(evaluationDTO);
        return evaluation;
    }

    @Get()
    async getAllEvaluations(){
        const evluations:Array<Evaluation> = await this.evalService.getAllEvaluations();
        return evluations;
    }

}