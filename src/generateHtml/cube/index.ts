import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';

const basedir = 'htmls/cube';

const cubeRankUp = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(false);
  const CurrentPageTitle = '잠재능력 등급 상승 확률';
  const directory = `${basedir}/rankup.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const cubeOption = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(false);
  const CurrentPageTitle = '옵션 등급 설정 확률';
  const directory = `${basedir}/option.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const cubeRankUpMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getRankUpParagraphList(true);
  const CurrentPageTitle = '미라클 타임 잠재능력 등급 상승 확률';
  const directory = `${basedir}/miracle-rankup.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const cubeOptionMiracle = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Cube.getOptionParagraphList(true);
  const CurrentPageTitle = '미라클 타임 옵션 등급 설정 확률';
  const directory = `${basedir}/miracle-option.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateCubePage = async () => {
  cubeRankUp();
  cubeOption();
  cubeRankUpMiracle();
  cubeOptionMiracle();
};

export default generateCubePage;
