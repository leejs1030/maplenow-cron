import { CronJob } from 'cron';

const job = new CronJob('*/10 * * * * *', () => {
  console.log('1');
});

job.start();
