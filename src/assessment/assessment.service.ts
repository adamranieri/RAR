import { Injectable } from "@nestjs/common";
import { Assessment } from "./assessment.schema";
import { AssessmentDTO } from "./assessment.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AssessmentService{

    constructor(@InjectModel(Assessment.name) private assessmentModel:Model<Assessment>){}

    //CREATE
      createAssessment(assessmentDTO:AssessmentDTO):Assessment{
        const assessment = new this.assessmentModel(assessmentDTO);
        assessment.save();
        return assessment;
    }

    //READ
    async getAllAssessments(evalName?:string):Promise<Assessment[]>{
        if(evalName !== undefined){
           return this.assessmentModel.find({evaluationName:evalName}).exec();
        }
        return this.assessmentModel.find().exec();
    }

    getAssessmentById(id:string):Promise<Assessment>{
        return this.assessmentModel.findById(id).exec();
    }

    //UPDATE
    updateAssessment(assessmentDTO:AssessmentDTO, id:string = ""){
        if(id === ''){
            const filter = {associate:assessmentDTO.associate}
            const config = {upsert:true, new:true}
            return this.assessmentModel.findOneAndUpdate(filter,assessmentDTO,config).exec()
        }else{
            return this.assessmentModel.updateOne({_id:id},assessmentDTO).exec();
        }    
    }



    //DELETE
    deleteAssessment(id:string){
        return this.assessmentModel.deleteOne({_id:id}).exec();
    }

}