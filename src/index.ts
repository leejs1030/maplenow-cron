import { CronJob } from 'cron';
import cheerio from 'cheerio';
import { generateAllHtml } from './generateHtml';

const $ = cheerio.load('');
$('head').append('<meta charset="utf-8">\n');

const job = new CronJob('*/10 * * * * *', () => {
  generateAllHtml($);
});

job.start();
