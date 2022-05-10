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
  .get('https://orng-api.nexon.com/api/services/maplestory/menus', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 Edg/101.0.1210.39',
    },
  })
  .then(
    (data) => console.log(data.data),
    (reason) => console.log(reason.request),
  )
  .catch((err) => console.log(err.request));

// if (process.env.CRON_REQUIRED) {
//   const job = new CronJob('* */5 * * * *', async () => {
//     console.log(new Date().toLocaleString());
//     await generateHtml();
//   });
//   job.start();
// }
generateHtml()
  .then(
    () => console.log('succes!!!'),
    (errReason) => console.error(errReason),
  )
  .catch((err) => console.log(err));
