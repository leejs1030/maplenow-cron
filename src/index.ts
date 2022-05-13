require('dotenv').config();
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
      base_tree = await github.getBaseTree();
      new_tree = await github.createTree(await generateHtml(), base_tree);
      end = KRDate();
      commit = await github.createCommit({ start, end, new_tree, base_tree });

      base_tree = await github.changeRef(commit);

      start = KRDate();
      new_tree = await github.deleteFiles(base_tree, start);
      end = KRDate();
      commit = await github.createCommit({
        start,
        end,
        new_tree,
        base_tree,
      });
      await github.changeRef(commit);
      return;
    } catch (err) {
      console.log(err);
    }
  }
};

main();

// const test = async () => {};
//
// test();
