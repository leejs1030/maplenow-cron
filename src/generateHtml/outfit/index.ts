import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';

const basedir = 'outfit';

const royalStylePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getRoyalStyleParagraphList();
  const CurrentPageTitle = '로얄스타일';
  const directory = `${basedir}/1.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const redPiecePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getRedPieceParagraphList();
  const CurrentPageTitle = '마스터피스 레드';
  const directory = `${basedir}/2.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const blackPiecePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Outfit.getBlackPieceParagraphList();
  const CurrentPageTitle = '마스터피스 블랙';
  const directory = `${basedir}/3.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateOutfitPage = async () => {
  royalStylePage();
  redPiecePage();
  blackPiecePage();
};

export default generateOutfitPage;
