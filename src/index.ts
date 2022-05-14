require('dotenv').config();

import { CronJob } from 'cron';
import generateHtml from './generateHtml';
import github from 'libs/github';
import { KRDate } from 'libs/time';

const main = async () => {
  console.log('job start');
  for await (let i of [0, 1, 2]) {
    try {
      let start: Date;
      let end: Date;
      let base_tree: string;
      let new_tree: string;
      let commit: string;

      start = KRDate();
      base_tree = await github.getBaseTree();
      new_tree = await github.createTree(await generateHtml(), base_tree);
      end = KRDate();
      commit = await github.createCommit({ start, end, new_tree, base_tree });

      base_tree = await github.changeRef(commit);

      start = KRDate();
      new_tree = await github.deleteFiles(base_tree, start);
      if (!new_tree) return console.log('job finished without delete!');
      end = KRDate();
      commit = await github.createCommit({
        start,
        end,
        new_tree,
        base_tree,
      });
      await github.changeRef(commit);
      return console.log('job finished with delete!');
    } catch (err) {
      console.error(new Date());
      console.error(err);
    }
  }
};

new CronJob('0 5 * * * *', () => {
  main();
}).start();

main();
