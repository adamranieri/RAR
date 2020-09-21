import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EvaluationDTO } from "./evaluation.dto";
import { Evaluation } from "./evaluation.schema";


@Injectable()
export class EvaluationService{

    constructor(@InjectModel(Evaluation.name) private evalModel:Model<Evaluation>){}

    async createEvaluation(evalDTO:EvaluationDTO):Promise<Evaluation>{
        const evalulation:Evaluation = await this.evalModel.create(evalDTO);
        evalulation.save();
        return evalulation;

    }

    async getAllEvaluations():Promise<Evaluation[]>{
        return await this.evalModel.find().exec();
    }

}