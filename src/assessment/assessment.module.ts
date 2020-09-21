import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Assessment } from './assessment.schema';
import {AssessmentSchema} from './assessment.schema'
import { AssessmentController } from './assessment.controller';
import { AssessmentService } from './assessment.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Assessment.name,schema:AssessmentSchema}])],
    controllers:[AssessmentController],
    providers:[AssessmentService]
})
export class AssessmentModule {}
