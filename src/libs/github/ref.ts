import octokit, { owner, repo, store } from 'libs/github/const';

export const changeRef = async () => {
  await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
    owner: owner,
    repo: repo,
    ref: 'heads/main',
    sha: store.commit,
  });
};
