import { Injectable } from '@nestjs/common';
import { ReportsService } from '../reports/reports.service';
import { AiService } from '../ai/ai.service';
import { UsersService } from '../users/users.service';
import { GatewayService } from '../gateway/gateway.service';

@Injectable()
export class ZaloService {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly aiService: AiService,
    private readonly usersService: UsersService,
    private readonly gatewayService: GatewayService,
  ) {}

  async handleEvent(payload: any) {
    const event = payload.event || payload.message;
    const userId = payload.user_id || payload.sender?.id;

    if (!event || !userId) {
      return { status: 'ignored', reason: 'Invalid payload' };
    }

    // Handle image message
    if (event.attachments?.[0]?.type === 'image') {
      return this.handleImageMessage(userId, event);
    }

    // Handle text message
    if (event.text) {
      return this.handleTextMessage(userId, event.text);
    }

    return { status: 'ignored', reason: 'Unsupported event type' };
  }

  private async handleImageMessage(userId: string, message: any) {
    const imageUrl = message.attachments[0].payload.url;
    const location = message.location;

    // Get user reputation
    const user = await this.usersService.findOrCreate(userId);

    // Create pending report
    const report = await this.reportsService.create({
      type: 'user',
      source: userId,
      coordinates: location ? [location.longitude, location.latitude] : [106.7009, 10.7769],
      imageUrl,
      waterLevel: -1,
      confidence: 0,
    });

    // Analyze image with AI
    // TODO: Download image and send to AI service
    // For now, mock response
    const aiResult = { water_level: 25.5, confidence: 0.85, status: 'success' };

    // Update report with AI result
    if (aiResult.status === 'success') {
      await this.reportsService.updateStatus(report.id, 'verified');
      await this.usersService.updateReputation(userId, true);
    }

    // Broadcast to all connected clients
    this.gatewayService.broadcastNewReport({
      ...report.toObject(),
      waterLevel: aiResult.water_level,
      confidence: aiResult.confidence,
    });

    return {
      status: 'success',
      message: `🌊 Mực nước: ${aiResult.water_level}cm\n📍 Đã cập nhật lên bản đồ`,
    };
  }

  private async handleTextMessage(userId: string, text: string) {
    if (text.toLowerCase().includes('help')) {
      return {
        status: 'success',
        message: '📸 Gửi ảnh đường ngập để kiểm tra mực nước\n🗺️ Truy cập floodnet.vn để xem bản đồ',
      };
    }

    return {
      status: 'success',
      message: '📸 Vui lòng gửi ảnh đường ngập để phân tích',
    };
  }
}
