import octokit, { owner, repo, blobs, branch, store } from './const';

export const getTree = async () => {
  const x = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
    owner,
    repo,
    branch,
  });
  store.base_tree = x.data.commit.sha as string;
};

export const createTree = async () => {
  const { base_tree } = store;
  const x = await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
    owner,
    repo,
    tree: blobs,
    base_tree,
  });
  store.new_tree = x.data.sha;
};
