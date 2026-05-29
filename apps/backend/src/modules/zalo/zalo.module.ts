import { Module } from '@nestjs/common';
import { ZaloController } from './zalo.controller';
import { ZaloService } from './zalo.service';
import { ReportsModule } from '../reports/reports.module';
import { AiModule } from '../ai/ai.module';
import { UsersModule } from '../users/users.module';
import { GatewayModule } from '../gateway/gateway.module';

@Module({
  imports: [ReportsModule, AiModule, UsersModule, GatewayModule],
  controllers: [ZaloController],
  providers: [ZaloService],
})
export class ZaloModule {}
