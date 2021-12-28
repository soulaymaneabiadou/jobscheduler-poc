import { config } from 'dotenv';
import Queue, { Job, JobOptions } from 'bull';
import { JobCategory, Payload } from '../shared';
import processor from '../processors';

config();

const queue = new Queue(JobCategory.TEST, {
  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT
  }
});

queue.process(processor);

const performJob = async (data: Payload, config: JobOptions) => {
  await queue.add(data, config);
};

queue.on('completed', (job: Job<Payload>, result) => {
  console.log(`Finished Job ${job.id}, with result:`, result);
});

export { performJob };
