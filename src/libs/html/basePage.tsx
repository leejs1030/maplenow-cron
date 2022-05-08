import React from 'react';
import { NextPage } from 'next';

const BasePage = ({ SelectedPage }: { SelectedPage: NextPage }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <SelectedPage />
      </body>
    </html>
  );
};

export default BasePage;
