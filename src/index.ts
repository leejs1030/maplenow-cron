import { CronJob } from 'cron';
import generateHtml from './generateHtml';

const job = new CronJob('*/10 * * * * *', async () => {
  console.log(new Date().toLocaleString());
  await generateHtml();
});

// job.start();

generateHtml();
