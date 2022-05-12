import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.MYTOK,
});
export default octokit;

export const owner = process.env.owner as string;
export const repo = process.env.repo as string;
export const branch = 'main';

export const blobs: { path: string; sha: string; type: 'blob'; mode: '100644' }[] = [];
export const store: { base_tree: string; new_tree: string; commit: string } = {
  base_tree: '',
  new_tree: '',
  commit: '',
};

export const clearStatus = () => {
  while (blobs.length) blobs.pop();
  store.base_tree = '';
  store.new_tree = '';
  store.commit = '';
};
