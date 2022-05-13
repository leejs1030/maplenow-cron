import { mapletype } from 'maplenow-tool';
import makePrettier from 'libs/html/prettierHtml';
import github from 'libs/github';
import { KRDate } from 'libs/time';

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
  const date = KRDate();
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
  let lastErr;
  for await (let i of [0, 1, 2, 3, 4]) {
    try {
      return await github.createBlob(prettyHtml, result);
    } catch (err) {
      console.error(err);
      lastErr = err;
    }
  }
  throw lastErr;
};

export default writeHtml;
