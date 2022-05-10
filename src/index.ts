import generateHtml from './generateHtml';
import { CronJob } from 'cron';

if (process.env.CRON_REQUIRED) {
  const job = new CronJob('* */5 * * * *', async () => {
    console.log(new Date().toLocaleString());
    await generateHtml();
  });
  job.start();
}
generateHtml()
  .then(
    () => console.log('succes!!!'),
    (errReason) => console.error(errReason),
  )
  .catch((err) => console.log(err));
