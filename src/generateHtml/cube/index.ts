import { Paragraphs } from 'maplenow-tool';
import * as fs from 'fs';
import makePrettier from 'libs/html/prettierHtml';

const cubeRankUp = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(false);
  const CurrentPageTitle = '잠재능력 등급 상승 확률';
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  fs.writeFileSync('htmls/cube/cubeRankUp.html', prettyHtml);
};

const cubeOption = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(false);
  const CurrentPageTitle = '옵션 등급 설정 확률';
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  fs.writeFileSync('htmls/cube/cubeOption.html', prettyHtml);
};

const cubeRankUpMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(true);
  const CurrentPageTitle = '미라클 타임 잠재능력 등급 상승 확률';
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  fs.writeFileSync('htmls/cube/cubeRankUpMiracle.html', prettyHtml);
};

const cubeOptionMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(true);
  const CurrentPageTitle = '미라클 타임 옵션 등급 설정 확률';
  const prettyHtml = await makePrettier({
    pageUuid,
    subPageUuid,
    description,
    paragraphs,
    CurrentPageTitle,
  });
  fs.writeFileSync('htmls/cube/cubeOptionMiracle.html', prettyHtml);
};

const generateCubePage = async () => {
  cubeRankUp();
  cubeOption();
  cubeRankUpMiracle();
  cubeOptionMiracle();
};

export default generateCubePage;
