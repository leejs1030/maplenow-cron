import { mapletype } from 'maplenow-tool';
import makePrettier from 'libs/html/prettierHtml';
import fs from 'fs';

const writeHtml = async ({
  pageUuid,
  subPageUuid,
  paragraphs,
  description,
  CurrentPageTitle,
}: {
  pageUuid: string;
  subPageUuid: string;
  paragraphs: { uuid: string; autoTable: mapletype.AutoTable }[];
  description: string | undefined;
  CurrentPageTitle: string;
}) => {
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  fs.writeFileSync('htmls/cube/cubeOptionMiracle.html', prettyHtml);
};

export default writeHtml;
