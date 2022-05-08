import { mapletype, Probs } from 'maplenow-tool';
import axios from 'axios';
import BasePage from 'libs/html/basePage';
import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier';

const makePrettier = async ({
  pageUuid,
  subPageUuid,
  paragraphs,
  description,
}: {
  pageUuid: string;
  subPageUuid: string;
  paragraphs: { uuid: string; autoTable: mapletype.AutoTable }[];
  description: string | undefined;
}) => {
  const TableInfo = paragraphs;
  const TableItem = await Probs.getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
  const TableTitle = TableInfo.filter((e) => e.autoTable).map((value) => value.autoTable.header);
  const UA =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 Edg/101.0.1210.39';
  const { data: CollectionInfo } = await axios.get(description as string, {
    headers: {
      'User-Agent': UA,
    },
  });
  const x = (
    <BasePage
      TableInfo={TableInfo}
      TableItem={TableItem}
      TableTitle={TableTitle}
      CollectionInfo={CollectionInfo}
    />
  );
  const html = ReactDOMServer.renderToStaticMarkup(x);
  const htmlWDoc = '<!DOCTYPE html>' + html;
  return prettier.format(htmlWDoc, { parser: 'html' });
};

export default makePrettier;
