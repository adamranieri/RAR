import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Evaluation, EvaluationSchema } from './evaluation.schema';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evalutation.controller';

@Module({
    imports:[MongooseModule.forFeature([{name:Evaluation.name,schema:EvaluationSchema}])],
    controllers:[EvaluationController],
    providers:[EvaluationService]
})
export class EvaluationModule {}
