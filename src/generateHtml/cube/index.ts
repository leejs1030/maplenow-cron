import { Paragraphs } from 'maplenow-tool';
import * as fs from 'fs';
import makePrettier from 'libs/html/prettierHtml';

const cubeRankUp = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(false);
  const prettyHtml = await makePrettier({ pageUuid, subPageUuid, description, paragraphs });
  fs.writeFileSync('htmls/cube/cubeRankUp.html', prettyHtml);
};

const cubeOption = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(false);
  const prettyHtml = await makePrettier({ pageUuid, subPageUuid, description, paragraphs });
  fs.writeFileSync('htmls/cube/cubeOption.html', prettyHtml);
};

const cubeRankUpMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(true);
  const prettyHtml = await makePrettier({ pageUuid, subPageUuid, description, paragraphs });
  fs.writeFileSync('htmls/cube/cubeRankUpMiracle.html', prettyHtml);
};

const cubeOptionMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(true);
  const prettyHtml = await makePrettier({ pageUuid, subPageUuid, description, paragraphs });
  fs.writeFileSync('htmls/cube/cubeOptionMiracle.html', prettyHtml);
};

const generateCubePage = async () => {
  cubeRankUp();
  cubeOption();
  cubeRankUpMiracle();
  cubeOptionMiracle();
};

export default generateCubePage;
