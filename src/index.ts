require('dotenv').config();

const cron = require('node-cron');
import generateHtml from './generateHtml';
import github from 'libs/github';
import { KRDate } from 'libs/time';

const main = async () => {
  for await (let i of [0, 1, 2]) {
    try {
      let start: Date;
      let end: Date;
      let base_tree: string;
      let new_tree: string;
      let commit: string;

      start = KRDate();
      console.log(`job start at ${start.toLocaleString('ko-KR')}`);

      base_tree = await github.getBaseTree();
      new_tree = await github.createTree(await generateHtml(), base_tree);
      end = KRDate();
      commit = await github.createCommit({ start, end, new_tree, base_tree });

      base_tree = await github.changeRef(commit);

      start = KRDate();
      new_tree = await github.deleteFiles(base_tree, start);
      if (!new_tree)
        return console.log(`job finished without delete!${KRDate().toLocaleString('ko-KR')}`);
      end = KRDate();
      commit = await github.createCommit({
        start,
        end,
        new_tree,
        base_tree,
      });
      await github.changeRef(commit);
      return console.log(`job finished with delete!${KRDate().toLocaleString('ko-KR')}`);
    } catch (err) {
      console.error(KRDate().toLocaleString('ko-KR'));
      console.error(err);
    }
  }
};


if (process.env.CRON_REQUIRED) cron.schedule(process.env.CRON_REQUIRED, main);

main();
