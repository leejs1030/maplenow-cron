import { Octokit } from '@octokit/core';
import { mapletype } from 'maplenow-tool';
import makePrettier from 'libs/html/prettierHtml';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const writeHtml = async ({
  pageUuid,
  subPageUuid,
  paragraphs,
  description,
  CurrentPageTitle,
  directory,
}: {
  pageUuid: string;
  subPageUuid: string;
  paragraphs: { uuid: string; autoTable: mapletype.AutoTable }[];
  description: string | undefined;
  CurrentPageTitle: string;
  directory: string;
}) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const result = `${year}/${month}/${day}/${hour}/${directory}`;
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: 'leejs1030',
    repo: 'maplenow-cron',
    path: result,
    message: 'cron job',
    committer: {
      name: 'maplenow-cron-bot',
      email: 'leejs1030@korea.ac.kr',
    },
    content: Buffer.from(prettyHtml).toString('base64'),
  });

  // fs.writeFileSync(result, prettyHtml);
};

export default writeHtml;
