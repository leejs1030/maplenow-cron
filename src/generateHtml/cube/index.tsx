import { NextPage } from 'next';
import React from 'react';
import { useAsync } from 'react-async';

interface Props {
  subPageNumber: any;
}

const fn = async () => {
  console.log('hi');
  return 1;
};

const cubePage: NextPage<{ a: number }> = ({ a }) => {
  console.log(a);
  const x = useAsync({
    promise: fn(),
  });
  console.log(x);
  return <div>{x.data}</div>;
};
cubePage.getInitialProps = (...args) => {
  // console.log('hi');
  // console.log(args);
  return {
    a: 2349,
  };
  // switch (subPageNumber) {
  //   case mapletype.cubePageEnum.rankUp:
  //     const ret = await Paragraphs.Cube.getRankUpParagraphList(false);
  //   case mapletype.cubePageEnum.option:
  //     const ret = await Paragraphs.Cube.getOptionParagraphList(false);
  //   case mapletype.cubePageEnum.miracleRankUp:
  //     const ret = await Paragraphs.Cube.getRankUpParagraphList(true);
  //   case mapletype.cubePageEnum.miracleOption:
  //     const ret = await Paragraphs.Cube.getOptionParagraphList(true);
  // }
};

export default cubePage;
