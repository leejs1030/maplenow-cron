import octokit, { owner, repo, branch } from './const';

export const getBaseTree = async () => {
  const { sha } = await octokit
    .request('GET /repos/{owner}/{repo}/branches/{branch}', {
      owner,
      repo,
      branch,
    })
    .then((val) => val.data.commit);
  return sha;
};

export const getTree = async (tree_sha: string) => {
  const tree = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner,
    repo,
    tree_sha,
  });
  return tree.data;
};

export const createTree = async (
  tree: { path: string; sha: string; type: 'blob'; mode: '100644' }[],
  base_tree: string,
) => {
  const { sha } = await octokit
    .request('POST /repos/{owner}/{repo}/git/trees', {
      owner,
      repo,
      tree,
      base_tree,
    })
    .then((val) => val.data);
  return sha;
};
