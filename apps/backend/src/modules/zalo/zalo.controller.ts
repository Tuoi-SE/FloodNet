import { Controller, Post, Body, Get, Query, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ZaloService } from './zalo.service';

@ApiTags('zalo')
@Controller('webhook')
export class ZaloController {
  constructor(private readonly zaloService: ZaloService) {}

  @Get('zalo')
  @ApiOperation({ summary: 'Verify Zalo webhook' })
  verifyWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
  ) {
    return challenge;
  }

  @Post('zalo')
  @HttpCode(200)
  @ApiOperation({ summary: 'Nhận sự kiện từ Zalo OA' })
  async handleWebhook(@Body() payload: any) {
    return this.zaloService.handleEvent(payload);
  }
}
