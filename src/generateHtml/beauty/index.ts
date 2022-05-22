import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'beauty';

const royalHairPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(false);
  const CurrentPageTitle = '로얄 헤어 쿠폰';
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

const royalFacePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalFaceParagraphList(false);
  const CurrentPageTitle = '로얄 성형 쿠폰';
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

const royalHairPageChange = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(true);
  const CurrentPageTitle = '체인지 로얄 헤어 쿠폰';
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

const royalFacePageChange = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalFaceParagraphList(true);
  const CurrentPageTitle = '체인지 로얄 성형 쿠폰';
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

const beautyAwardHairPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getBeautyAwardHairParagraphList();
  const CurrentPageTitle = '뷰티 어워즈 헤어 쿠폰';
  const directory = `${basedir}/5.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const beautyAwardFacePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getBeautyAwardFaceParagraphList();
  const CurrentPageTitle = '뷰티 어워즈 성형 쿠폰';
  const directory = `${basedir}/6.html`;
  return writeHtml({
    pageUuid,
    subPageUuid,
    paragraphs,
    description,
    CurrentPageTitle,
    directory,
  });
};

const generateBeautyPage = async () => {
  const royalHair = await royalHairPage();
  await delay(385, 1657);
  const royalFace = await royalFacePage();
  await delay(125, 2626);
  const royalHairChange = await royalHairPageChange();
  await delay(843, 1984);
  const royalFaceChange = await royalFacePageChange();
  await delay(125, 2626);
  const beautyAwardHair = await beautyAwardHairPage();
  await delay(843, 1984);
  const beautyAwardFace = await beautyAwardFacePage();
  return [royalHair, royalFace, royalHairChange, royalFaceChange, beautyAwardHair, beautyAwardFace];
};

export default generateBeautyPage;
