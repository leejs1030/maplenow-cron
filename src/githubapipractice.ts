import { Octokit } from '@octokit/core';

const { owner, repo } = process.env as { owner: string; repo: string };

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
const main = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const result = `${year}/${month}/${day}/${hour}/${Math.random()}.txt`;
  const x = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
    owner: owner,
    repo: repo,
    branch: 'main',
  });
  const BASE_TREE_SHA = x.data.commit.sha;
  const { sha: f1 } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
      owner: owner,
      repo: repo,
      content: Buffer.from('adsoifjeflkew').toString('base64'),
    })
  ).data;

  const { sha: f2 } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
      owner: owner,
      repo: repo,
      content: Buffer.from('adsoifjeflkew1').toString('base64'),
    })
  ).data;

  console.log(f1);
  console.log(f2);

  const { data: tree } = await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
    owner: owner,
    repo: repo,
    tree: [
      {
        path: 'x/a.txt',
        mode: '100644',
        type: 'blob',
        sha: f1,
      },
      {
        path: 'x/b.txt',
        mode: '100644',
        type: 'blob',
        sha: f2,
      },
    ],
    base_tree: BASE_TREE_SHA,
  });
  console.log(tree);
  const { sha: head } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
      owner: owner,
      repo: repo,
      tree: tree.sha,
      message: new Date().toISOString(),
      parents: [BASE_TREE_SHA],
    })
  ).data;
  const res = await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
    owner: owner,
    repo: repo,
    ref: 'heads/main',
    sha: head,
  });
  console.log(res);
};

main();
