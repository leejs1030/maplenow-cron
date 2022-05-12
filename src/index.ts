import generateHtml from './generateHtml';
import github from 'libs/github';

const main = async () => {
  for await (let i of [0, 1, 2]) {
    try {
      await github.getTree();
      await generateHtml();
      await github.createTree();
      await github.createCommit();
      await github.changeRef();
      await github.clearStatus();
    } catch (err) {
      console.log(err);
      continue;
    }
    break;
  }
};

main();
