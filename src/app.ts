import express, { Request, Response } from 'express';
import { JobOptions } from 'bull';
import { performJob } from './queues';
import { JobPriority } from './shared';

const app = express();

app.use(express.json());

app.post('/jobs', async (req: Request, res: Response) => {
  const { data, priority, repeatable, cron, jobId } = req.body;
  const config: JobOptions = { priority: +JobPriority[priority], jobId };

  if (repeatable && cron) {
    config.repeat = {
      cron: cron
    };
  }

  config.delay = 10000;

  await performJob(data, config);
  res.send({ status: 'ok' });
});

export { app };
