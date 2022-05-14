import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'beauty';

const royalHairPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(false);
  const CurrentPageTitle = '로얄 헤어 쿠폰';
  const directory = `${basedir}/1.html`;
  return await writeHtml({
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
  return await writeHtml({
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
  return await writeHtml({
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
  return await writeHtml({
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
  return [royalHair, royalFace, royalHairChange, royalFaceChange];
};

export default generateBeautyPage;
