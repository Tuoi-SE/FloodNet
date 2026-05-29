import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CameraService } from './camera.service';

@ApiTags('camera')
@Controller('cameras')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Get()
  @ApiOperation({ summary: 'Danh sách camera' })
  findAll() {
    return this.cameraService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Camera đang hoạt động' })
  findActive() {
    return this.cameraService.findActive();
  }
}
