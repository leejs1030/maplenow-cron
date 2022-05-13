import octokit, { owner, repo, createBlobs, branch, store } from './const';

export const getBaseTree = async () => {
  const x = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
    owner,
    repo,
    branch,
  });
  store.base_tree = x.data.commit.sha as string;
  return store.base_tree;
};

export const getTree = async (tree_sha: string = store.base_tree) => {
  const tree = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner,
    repo,
    tree_sha,
  });
  return tree.data;
};

export const createTree = async () => {
  const { base_tree } = store;
  const x = await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
    owner,
    repo,
    tree: createBlobs,
    base_tree,
  });
  store.new_tree = x.data.sha;
};
