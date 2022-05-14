import React from 'react';
import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import GenerateAllTable from 'libs/html/generateAllTable';
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
      <head id={'head'}>
        <meta charSet="UTF-8" />
        <style>{'table, th, td { border: 1px solid; }'}</style>
      </head>
      <body id={'body'}>
        <div id={'body-div'}>
          <h1>{CurrentPageTitle}</h1>
          <UseInnerHtml str={CollectionInfo} />
          <GenerateAllTable TableItem={TableItem} TableTitle={TableTitle} TableInfo={TableInfo} />
        </div>
      </body>
    </html>
  );
};

export default BasePage;
