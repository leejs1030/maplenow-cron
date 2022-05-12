import octokit, { owner, repo, store } from 'libs/github/const';

export const createCommit = async () => {
  const { sha: head } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
      owner: owner,
      repo: repo,
      tree: store.new_tree,
      message: new Date().toISOString(),
      parents: [store.base_tree],
    })
  ).data;
  store.commit = head;
};
