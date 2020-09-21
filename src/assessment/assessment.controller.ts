import { Controller, Get, Post, Put, Body, Param, Delete, Query } from "@nestjs/common";
import { Assessment } from "./assessment.schema";
import { AssessmentDTO } from "./assessment.dto";
import { AssessmentService } from "./assessment.service";

@Controller('assessments')
export class AssessmentController{

    constructor(private assessmentService:AssessmentService){}

    @Post()
    createAssessment(@Body() assessmentDTO:AssessmentDTO):Assessment{
        return this.assessmentService.createAssessment(assessmentDTO);
    }

    @Get()
    async getAllAssessments(@Query('evalName') evalName:string):Promise<Assessment[]>{
        return await this.assessmentService.getAllAssessments(evalName);
    }

    @Get(":id")
    getAssessmentById(@Param('id') id:string):Promise<Assessment>{
        return this.assessmentService.getAssessmentById(id);
    }

    @Put()
    async updateAssessmentWithoutId(@Body() assessmentDTO:AssessmentDTO):Promise<Assessment>{
        return await this.assessmentService.updateAssessment(assessmentDTO);
    }

    @Put(':id')
    async updateAssessmentWithId(@Body() assessmentDTO:AssessmentDTO, @Param('id') id:string){
        return await this.assessmentService.updateAssessment(assessmentDTO, id);
    }

    @Delete(':id')
    async deleteAssessment(@Param('id') id:string){
        return this.assessmentService.deleteAssessment(id);
    }


}