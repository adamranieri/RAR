import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { AssessmentModule } from './assessment/assessment.module';
import { join } from 'path';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/revassess'),
    EvaluationModule,
    AssessmentModule

    //,
    // ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client'),})
     ],
  controllers: [],
  providers: [],
})
export class AppModule {}
