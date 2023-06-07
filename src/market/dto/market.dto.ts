import {isBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateMarketDTO{
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly events: [String]
}