import { mapletype } from 'maplenow-tool';
import makePrettier from 'libs/html/prettierHtml';
import fs from 'fs';

const writeHtml = ({
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
  console.log(result);
  makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  }).then((prettyHtml) => {
    try {
      fs.writeFileSync(result, prettyHtml);
    } catch (err) {
      console.log(err);
    }
  });
};

export default writeHtml;
