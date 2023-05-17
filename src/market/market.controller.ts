import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';

@Controller('market')
export class MarketController {

    @Post('/create')
    createMarket(@Res() res) {
        res.status(HttpStatus.OK).json({
            message: "recibido"
        })
    }
}
