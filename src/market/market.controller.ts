import {
  Body,
  ConflictException,
  NotFoundException,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
//import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDTO } from '../market/dto/market.dto';

@Controller('market')
export class MarketController {
  constructor(private readonly MarketService: MarketService) {}

  @Get()
  async getMarket() {
    return this.MarketService.findAll();
  }

  @Post('create')
  async createMarket(@Body() CreateMarketDTO: CreateMarketDTO) {
    try {
      return await this.MarketService.create(CreateMarketDTO);
    } catch (error) {}
  }

  @Get(':id')
  async getMarketById(@Param('id') id: string) {
    try {
      return await this.MarketService.findOne(id);
    } catch (error) {
      throw new NotFoundException('Market not found');
    }
  }

  @Put(':id')
  async updateMarket(
    @Param('id') id: string,
    @Body() CreateMarketDTO: CreateMarketDTO,
  ) {
    try {
      return await this.MarketService.update(id, CreateMarketDTO);
    } catch (error) {
      throw new NotFoundException('Market not found');
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async deleteMarket(@Param('id') id: string) {
    try {
      return await this.MarketService.delete(id);
    } catch (error) {
      throw new NotFoundException('Market not found');
    }
  }
}
