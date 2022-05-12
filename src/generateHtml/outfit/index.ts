import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'outfit';

const royalStylePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getRoyalStyleParagraphList();
  const CurrentPageTitle = '로얄스타일';
  const directory = `${basedir}/1.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const redPiecePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getRedPieceParagraphList();
  const CurrentPageTitle = '마스터피스 레드';
  const directory = `${basedir}/2.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const blackPiecePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getBlackPieceParagraphList();
  const CurrentPageTitle = '마스터피스 블랙';
  const directory = `${basedir}/3.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateOutfitPage = async () => {
  await royalStylePage();
  await delay(1050, 1100);
  await redPiecePage();
  await delay(275, 2030);
  await blackPiecePage();
};

export default generateOutfitPage;
