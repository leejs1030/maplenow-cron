import React from 'react';
import { NextPage } from 'next';

const UseInnerHtml: NextPage<{ str: string }> = ({ str }) => {
  return <div dangerouslySetInnerHTML={{ __html: str }} />;
};

export default UseInnerHtml;
