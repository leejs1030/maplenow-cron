import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'cube';

const cubeRankUp = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(false);
  const CurrentPageTitle = '잠재능력 등급 상승 확률';
  const directory = `${basedir}/1.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const cubeOption = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(false);
  const CurrentPageTitle = '옵션 등급 설정 확률';
  const directory = `${basedir}/2.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const cubeRankUpMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(true);
  const CurrentPageTitle = '미라클 타임 잠재능력 등급 상승 확률';
  const directory = `${basedir}/3.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const cubeOptionMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(true);
  const CurrentPageTitle = '미라클 타임 옵션 등급 설정 확률';
  const directory = `${basedir}/4.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const generateCubePage = async () => {
  const rank = await cubeRankUp();
  await delay(102, 1060);
  const option = await cubeOption();
  await delay(50, 100);
  const rankMiracle = await cubeRankUpMiracle();
  await delay(726, 1120);
  const optionMiracle = await cubeOptionMiracle();
  return [rank, option, rankMiracle, optionMiracle];
};

export default generateCubePage;
