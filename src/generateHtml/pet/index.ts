import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';

const basedir = 'pet';

const wonderBerryPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getWonderBerryParagraphList();
  const CurrentPageTitle = '위습의 원더베리';
  const directory = `${basedir}/1.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const crystalSweetPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getCrystalSweetParagraphList();
  const CurrentPageTitle = '루나 크리스탈 스윗';
  const directory = `${basedir}/2.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const crystalDreamPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getCrystalDreamParagraphList();
  const CurrentPageTitle = '루나 크리스탈 드림';
  const directory = `${basedir}/3.html`;
  writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generatePetPage = async () => {
  wonderBerryPage();
  crystalSweetPage();
  crystalDreamPage();
};

export default generatePetPage;
