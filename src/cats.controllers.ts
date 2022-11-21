import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
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
