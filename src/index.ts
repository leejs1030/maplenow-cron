import generateHtml from './generateHtml';
import github from 'libs/github';
import { KRDate } from 'libs/time';

const main = async () => {
  for await (let i of [0, 1, 2]) {
    try {
      const start = KRDate();
      await github.getTree();
      await generateHtml();
      await github.createTree();
      await github.createCommit(start, KRDate());
      await github.changeRef();
      await github.clearStatus();
    } catch (err) {
      console.log(err);
      continue;
    }
    break;
  }
};

// main();

const test = async () => {};

test();
