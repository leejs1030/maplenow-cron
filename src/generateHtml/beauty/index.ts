import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';

const basedir = 'beauty';

const royalHairPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(false);
  const CurrentPageTitle = '로얄 헤어 쿠폰';
  const directory = `${basedir}/1.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const royalFacePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(false);
  const CurrentPageTitle = '로얄 성형 쿠폰';
  const directory = `${basedir}/2.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const royalHairPageChange = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(true);
  const CurrentPageTitle = '체인지 로얄 헤어 쿠폰';
  const directory = `${basedir}/3.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const royalFacePageChange = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Beauty.getRoyalHairParagraphList(true);
  const CurrentPageTitle = '체인지 로얄 성형 쿠폰';
  const directory = `${basedir}/4.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateBeautyPage = async () => {
  await royalHairPage();
  await royalFacePage();
  await royalHairPageChange();
  await royalFacePageChange();
};

export default generateBeautyPage;
