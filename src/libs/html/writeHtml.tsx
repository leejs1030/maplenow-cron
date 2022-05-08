import { mapletype } from 'maplenow-tool';
import makePrettier from 'libs/html/prettierHtml';
import fs from 'fs';

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
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  const date = new Date();
  date.setHours(date.getHours() + 9);
  const dateString = date.toISOString().substring(0, 13);
  const dir = directory.lastIndexOf('/');
  const result = `${directory.substring(0, dir + 1)}${dateString}-${directory.substring(dir + 1)}`;
  fs.writeFileSync(result, prettyHtml);
};

export default writeHtml;
