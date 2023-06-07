import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Market, MarketSchema } from './schemas/market.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Market.name, schema:MarketSchema}
      ])
  ],
  controllers: [MarketController],
  providers: [MarketService]
})
export class MarketModule {}

