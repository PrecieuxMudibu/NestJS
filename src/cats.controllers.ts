import {
  Controller,
  Get,
  Header,
  Post,
  HttpCode,
  Redirect,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  //   @Get()
  //   findAll(): string {
  //     return 'This action returns all cats';
  //   }

  @Get()
  @Redirect('https://nestjs.com', 301)
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
}

// import { Controller, Get, Req } from '@nestjs/common';
// import { Request } from 'express';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action returns all cats';
//   }
// }
