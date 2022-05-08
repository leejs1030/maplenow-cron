import React from 'react';

const useInnerHtml = (header: string) => {
  return <div dangerouslySetInnerHTML={{ __html: header }} />;
};

export default useInnerHtml;
