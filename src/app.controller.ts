import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import CreateNewAnswerDto from './dtos/createNewAnswer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthcheck(): string {
    return this.appService.healthcheck();
  }

  @Get('/getQuestions')
  getQuestions(){
    return this.appService.getQuestions();
  }

  @Post('/createNewUserAnswer')
  createUserAnswer(@Body() createUserAnswerDto: CreateNewAnswerDto) {
    return this.appService.createUserAnswer(createUserAnswerDto);
  }

  @Post('/dbInit')
  dbInit(){
    return this.appService.dbInit();
  }
}
