import React from 'react';
import { mapletype } from 'maplenow-tool';
import { SelectPage } from './selectPage';
import { allPageEnum } from 'custom-type';

const Hello = ({
  pageName,
  subPageName,
}: {
  pageName: mapletype.pageEnum;
  subPageName: allPageEnum;
}) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <SelectPage subPageNumber={subPageName} pageNumber={pageName} />
      </body>
    </html>
  );
};

export default Hello;
