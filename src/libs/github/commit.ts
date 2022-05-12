import octokit, { owner, repo, store } from 'libs/github/const';

export const createCommit = async () => {
  const date = new Date();
  const { sha: head } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
      owner: owner,
      repo: repo,
      tree: store.new_tree,
      message: `${date.toLocaleDateString('ko-kr')} + ${date.toLocaleTimeString('ko-kr')}`,
      parents: [store.base_tree],
    })
  ).data;
  store.commit = head;
};
