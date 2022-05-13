import octokit, { owner, repo } from 'libs/github/const';

export const changeRef = async (commit: string) => {
  return await octokit
    .request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
      owner: owner,
      repo: repo,
      ref: 'heads/main',
      sha: commit,
    })
    .then((val) => val.data.object.sha);
};
