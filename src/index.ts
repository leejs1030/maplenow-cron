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
  .get('https://orng-api.nexon.com/api/services/maplestory/menus')
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
