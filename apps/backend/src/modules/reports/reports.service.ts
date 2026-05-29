import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from './schemas/report.schema';
import { CreateReportDto, QueryReportsDto } from './dto/report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = new this.reportModel({
      ...createReportDto,
      location: {
        type: 'Point',
        coordinates: createReportDto.coordinates,
      },
    });
    return report.save();
  }

  async findNearby(query: QueryReportsDto): Promise<Report[]> {
    const { lat, lng, radius = 5000, hours = 24 } = query;
    const since = new Date(Date.now() - hours * 60 * 60 * 1000);

    return this.reportModel
      .find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lng, lat],
            },
            $maxDistance: radius,
          },
        },
        createdAt: { $gte: since },
      })
      .sort({ createdAt: -1 })
      .limit(100)
      .exec();
  }

  async findOne(id: string): Promise<Report | null> {
    return this.reportModel.findById(id).exec();
  }

  async updateStatus(id: string, status: string): Promise<Report | null> {
    return this.reportModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }
}
