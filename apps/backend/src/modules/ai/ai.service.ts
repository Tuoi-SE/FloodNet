import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

interface AnalyzeResult {
  water_level: number;
  confidence: number;
  status: string;
}

@Injectable()
export class AiService {
  private readonly aiUrl: string;

  constructor(private configService: ConfigService) {
    this.aiUrl = this.configService.get('AI_SERVICE_URL') || 'http://localhost:8000';
  }

  async analyzeImage(imageBuffer: Buffer): Promise<AnalyzeResult> {
    try {
      const response = await axios.post(`${this.aiUrl}/analyze`, imageBuffer, {
        headers: { 'Content-Type': 'application/octet-stream' },
        timeout: 10000,
      });
      return response.data;
    } catch (error) {
      console.error('AI service error:', error.message);
      return { water_level: -1, confidence: 0, status: 'error' };
    }
  }
}
