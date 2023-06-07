import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  
    MarketModule,
    MongooseModule.forRoot('mongodb+srv://jesusmoreno199501:PgmWP0Rvd2cWfkET@metafila.i3cchhj.mongodb.net/metafila-prueba')


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
