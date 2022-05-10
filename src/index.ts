import generateHtml from './generateHtml';
import { CronJob } from 'cron';
import axios from 'axios';

// axios
//   .get('https://github.com/')
//   .then(
//     (data) => console.log(data.data),
//     (reason) => console.log(reason || reason?.data),
//   )
//   .catch((err) => console.log(err || err?.data));
axios
  .get('https://now.nexon.com/service/maplestory?page=0ea22a8a-31ff-4e41-8c10-9ea6d90dd244')
  .then(
    (data) => console.log(data.data),
    (reason) => console.log(reason || reason?.data),
  )
  .catch((err) => console.log(err || err?.data));

// if (process.env.CRON_REQUIRED) {
//   const job = new CronJob('* */5 * * * *', async () => {
//     console.log(new Date().toLocaleString());
//     await generateHtml();
//   });
//   job.start();
// }
// generateHtml()
//   .then(
//     () => console.log('succes!!!'),
//     (errReason) => console.error(errReason),
//   )
//   .catch((err) => console.log(err));
