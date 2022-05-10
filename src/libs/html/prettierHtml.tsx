import { mapletype, Probs } from 'maplenow-tool';
import BasePage from 'libs/html/basePage';
import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier';

const makePrettier = async ({
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
  const TableInfo = paragraphs;
  const TableItem = await Probs.getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
  const TableTitle = TableInfo.filter((e) => e.autoTable).map((value) => value.autoTable.header);
  const CollectionInfo: string = description as string;

  const x = (
    <BasePage
      TableInfo={TableInfo}
      TableItem={TableItem}
      TableTitle={TableTitle}
      CollectionInfo={CollectionInfo}
      CurrentPageTitle={CurrentPageTitle}
    />
  );
  const html = ReactDOMServer.renderToStaticMarkup(x);
  const htmlWDoc = '<!DOCTYPE html>' + html;
  return prettier.format(htmlWDoc, { parser: 'html' });
};

export default makePrettier;
