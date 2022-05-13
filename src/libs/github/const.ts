import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.ABCDEFG,
});
export default octokit;

// console.log('printenv');
// console.log(process.env.OWNER);
// console.log(process.env.REPO);
// console.log(process.env.owner);
// console.log(process.env.repo);
export const owner = process.env.OWNER as string;
export const repo = process.env.REPO as string;
export const branch = 'main';

// export const createBlobs: { path: string; sha: string; type: 'blob'; mode: '100644' }[] = [];
// export const deleteBlobs: { path: string; sha: string; type: 'blob'; mode: '100644' }[] = [];
// export const store: { base_tree: string; new_tree: string; commit: string } = {
//   base_tree: '',
//   new_tree: '',
//   commit: '',
// };

// export const clearStatus = () => {
// while (createBlobs.length) createBlobs.pop();
// while (deleteBlobs.length) deleteBlobs.pop();
// store.base_tree = '';
// store.new_tree = '';
// store.commit = '';
// };
