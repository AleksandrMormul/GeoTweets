import { Test, TestingModule } from '@nestjs/testing';
import { GeoTweetsService } from './geo-tweets.service';

describe('GeoTweetsService', () => {
  let service: GeoTweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoTweetsService],
    }).compile();

    service = module.get<GeoTweetsService>(GeoTweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
