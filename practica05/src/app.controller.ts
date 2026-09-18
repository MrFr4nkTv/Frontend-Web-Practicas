import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  private clases = [
    { id: 1, nombre: 'Yoga' },
    { id: 2, nombre: 'Spinning' },
  ];

  @Get('clases')
  getClases() {
    return this.clases;
  }

  @Post('clases')
  create(@Body() nuevaClase: { id: number; nombre: string }) {
    this.clases.push(nuevaClase);
    return nuevaClase;
  }
}