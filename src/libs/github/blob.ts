import octokit, { owner, repo, createBlobs } from './const';

export const createBlob = async (content: string, path: string) => {
  const { sha } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
      owner,
      repo,
      content: Buffer.from(content).toString('utf-8'),
    })
  ).data;
  createBlobs.push({ path, sha, type: 'blob', mode: '100644' });
};
