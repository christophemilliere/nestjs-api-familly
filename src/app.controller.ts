import {
  Get,
  Controller,
  Post,
  Res,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  arr = 'toto';

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/companies/:id')
  getById(@Param('id') companyId: string) {
    // tslint:disable-next-line:no-console
    return [
      {
        id: companyId,
      },
    ];
  }

  @Get('/companies/')
  getAll(@Req() req) {
    return 'coucou';
  }
}
