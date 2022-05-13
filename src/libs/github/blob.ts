import octokit, { owner, repo } from './const';

export const createBlob = async (
  content: string,
  path: string,
): Promise<{ path: string; sha: string; type: 'blob'; mode: '100644' }> => {
  const { sha } = (
    await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
      owner,
      repo,
      content: Buffer.from(content).toString('utf-8'),
    })
  ).data;
  return { path, sha, type: 'blob', mode: '100644' };
};
