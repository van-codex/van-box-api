import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScriptTaskEntity } from '../database/script-task.entity';
import { ApiTaskEntity } from '../database/api-task.entity';
import { QueueTaskEntity } from '../database/queue-task.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(ScriptTaskEntity)
    public readonly scriptTask: Repository<ScriptTaskEntity>,
    @InjectRepository(ApiTaskEntity)
    public readonly apiTask: Repository<ApiTaskEntity>,
    @InjectRepository(QueueTaskEntity)
    public readonly queueTask: Repository<QueueTaskEntity>,
  ) {
  }
}
