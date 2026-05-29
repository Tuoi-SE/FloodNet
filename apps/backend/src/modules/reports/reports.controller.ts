import { Controller, Get, Post, Body, Query, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { CreateReportDto, QueryReportsDto } from './dto/report.dto';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo báo cáo ngập lụt mới' })
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @Get()
  @ApiOperation({ summary: 'Tìm báo cáo gần một vị trí' })
  @ApiQuery({ name: 'lat', required: true, type: Number })
  @ApiQuery({ name: 'lng', required: true, type: Number })
  @ApiQuery({ name: 'radius', required: false, type: Number })
  @ApiQuery({ name: 'hours', required: false, type: Number })
  findNearby(@Query() query: QueryReportsDto) {
    return this.reportsService.findNearby(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết báo cáo' })
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Cập nhật trạng thái báo cáo' })
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.reportsService.updateStatus(id, status);
  }
}
