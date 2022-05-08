import React from 'react';
import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import GenerateTable from 'libs/html/generateTable';

const BasePage: NextPage<{
  TableItem: mapletype.AutoTableItem[][][];
  TableTitle: string[];
  TableInfo: { uuid: string; autoTable: mapletype.AutoTable }[];
}> = ({ TableItem, TableTitle, TableInfo }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <style>{'table, th, td { border: 1px solid; }'}</style>
      </head>
      <body>
        <GenerateTable TableItem={TableItem} TableTitle={TableTitle} TableInfo={TableInfo} />
      </body>
    </html>
  );
};

export default BasePage;
