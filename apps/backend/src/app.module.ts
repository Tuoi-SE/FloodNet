import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsModule } from './modules/reports/reports.module';
import { ZaloModule } from './modules/zalo/zalo.module';
import { AiModule } from './modules/ai/ai.module';
import { CameraModule } from './modules/camera/camera.module';
import { UsersModule } from './modules/users/users.module';
import { GatewayModule } from './modules/gateway/gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/floodnet'),
    ReportsModule,
    ZaloModule,
    AiModule,
    CameraModule,
    UsersModule,
    GatewayModule,
  ],
})
export class AppModule {}
