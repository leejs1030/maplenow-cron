import generateHtml from './generateHtml';
import { CronJob } from 'cron';

if (process.env.CRON_REQUIRED) {
  const job = new CronJob('* */5 * * * *', async () => {
    console.log(new Date().toLocaleString());
    await generateHtml();
  });
  job.start();
} else {
  generateHtml();
}
