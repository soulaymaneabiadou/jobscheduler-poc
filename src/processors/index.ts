import { Job } from 'bull';
import { Payload } from '../shared';

const jobProcessor = async (job: Job<Payload>) => {
  console.log(`Hello ${job.data.name}`);

  return `Greeted ${job.data.name}`;
};

export default jobProcessor;
