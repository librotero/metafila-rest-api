import { Injectable } from '@nestjs/common';
import { CreateMarketDTO } from './dto/market.dto';
import { MarketSchema, Market } from './schemas/market.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MarketService {
  constructor(@InjectModel(Market.name) private marketModel: Model<Market>) {}

  async create(createMarketDTO: CreateMarketDTO) {
    const createdMarket = new this.marketModel(createMarketDTO);
    return createdMarket.save();
  }

  async findAll(): Promise<Market[]> {
    return this.marketModel.find().exec();
  }
  async findOne(id: string): Promise<Market> {
    return this.marketModel.findById(id).exec();
  }
  async delete(id: string): Promise<Market> {
    return this.marketModel.findByIdAndRemove(id).exec();
  }
  async update(id: string, createMarketDTO: CreateMarketDTO): Promise<Market> {
    return this.marketModel
      .findByIdAndUpdate(id, createMarketDTO, { new: true })
      .exec();
  }
}
