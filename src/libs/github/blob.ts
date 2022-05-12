import octokit, { owner, repo, blobs } from './const';

export const createBlob = async (content: string, path: string) => {
  const { sha } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
      owner,
      repo,
      content: Buffer.from(content).toString('base64'),
    })
  ).data;
  blobs.push({ path, sha, type: 'blob', mode: '100644' });
};
