import generateHtml from './generateHtml';
import github from 'libs/github';
import { KRDate } from 'libs/time';

const main = async () => {
  for await (let i of [0, 1, 2]) {
    try {
      const start = KRDate();
      const base_tree = await github.getBaseTree();
      const tree = await generateHtml();
      const new_tree = await github.createTree(tree, base_tree);

      const end = KRDate();
      const commit = await github.createCommit({ start, end, new_tree, base_tree });
      const head = await github.changeRef(commit);
      // console.log(head);
      // console.log(await github.getBaseTree());
      // const delete_tree = await github.deleteFiles()
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
