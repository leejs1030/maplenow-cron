import octokit, { owner, repo, store } from 'libs/github/const';
import KRDate from 'libs/time/KRDate';

export const createCommit = async () => {
  const date = KRDate();
  const { sha: head } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
      owner: owner,
      repo: repo,
      tree: store.new_tree,
      message: `한국 시간 기준 ${date.toISOString().slice(0, -1).replace('T', ' ')}의 로그입니다.`,
      parents: [store.base_tree],
    })
  ).data;
  store.commit = head;
};
