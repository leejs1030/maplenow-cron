import React from 'react';
import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import GenerateTable from 'libs/html/generateTable';
import UseInnerHtml from 'libs/html/useInnerHtml';

const BasePage: NextPage<{
  TableItem: mapletype.AutoTableItem[][][];
  TableTitle: string[];
  TableInfo: { uuid: string; autoTable: mapletype.AutoTable }[];
  CollectionInfo: string;
  CurrentPageTitle: string;
}> = ({ TableItem, TableTitle, TableInfo, CollectionInfo, CurrentPageTitle }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <style>{'table, th, td { border: 1px solid; }'}</style>
      </head>
      <body>
        <h1>{CurrentPageTitle}</h1>
        <UseInnerHtml str={CollectionInfo} />
        <GenerateTable TableItem={TableItem} TableTitle={TableTitle} TableInfo={TableInfo} />
      </body>
    </html>
  );
};

export default BasePage;
