import octokit, { owner, repo } from 'libs/github/const';

export const createCommit = async ({
  start,
  end,
  new_tree,
  base_tree,
}: {
  start: Date;
  end: Date;
  new_tree: string;
  base_tree: string;
}) => {
  const { sha: head } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
      owner: owner,
      repo: repo,
      tree: new_tree,
      message: `한국 시간 기준 ${start.getFullYear()}년 ${
        start.getMonth() + 1
      }월 ${start.getDate()}일 ${start.getHours()}시 ${start.getMinutes()}분 ${start.getSeconds()}초 ~ ${end.getFullYear()}년 ${
        end.getMonth() + 1
      }월 ${end.getDate()}일 ${end.getHours()}시 ${end.getMinutes()}분 ${end.getSeconds()}초`,
      parents: [base_tree],
    })
  ).data;
  return head;
};
