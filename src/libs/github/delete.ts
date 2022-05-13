import octokit, { owner, repo } from 'libs/github/const';

const folders: [string, string[]][] = [
  ['abil', ['1', '2']],
  ['beauty', ['1', '2', '3', '4']],
  ['cube', ['1', '2', '3', '4']],
  ['outfit', ['1', '2', '3']],
  ['pet', ['1', '2', '3']],
  ['star', ['1', '2', '3', '4', '5']],
];

export const deleteFiles = async (base_tree: string, current: Date) => {
  const year = current.getFullYear() - 1;
  const month = current.getMonth() + 1;
  const date = current.getDate();
  const hour = current.getHours();
  const finding = `${year}/${month}/${date}/${hour}`; // 1년 전 구하기
  const files = folders
    .map((page) =>
      page[1].map(
        (numberString) =>
          ({
            path: `${finding}/${page[0]}/${numberString}.html`,
            mode: '100644',
            type: 'blob',
            sha: null,
          } as { path: string; mode: '100644'; type: 'blob'; sha: null }),
      ),
    )
    .reduce((acc, cur) => {
      acc = [...acc, ...cur];
      return acc;
    }, []);
  return octokit
    .request('POST /repos/{owner}/{repo}/git/trees', {
      owner,
      repo,
      tree: files,
      base_tree,
    })
    .then((val) => val.data.sha)
    .catch((err) => '');
};
