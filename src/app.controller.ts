import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/:id')
  // getOne(@Param("id") movieId: string) { // @Param() 여기서 받아온 값이 movieId라는 변수에 들어가게 된다.
  //   return `This will return one movie with the id:${movieId}`;
  // }

  // @Post()
  // @Delete('/:id')
  // @Put()
  // @Patch('/:id')
}
