import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'pet';

const wonderBerryPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getWonderBerryParagraphList();
  const CurrentPageTitle = '위습의 원더베리';
  const directory = `${basedir}/1.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const crystalSweetPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getCrystalSweetParagraphList();
  const CurrentPageTitle = '루나 크리스탈 스윗';
  const directory = `${basedir}/2.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const crystalDreamPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Pet.getCrystalDreamParagraphList();
  const CurrentPageTitle = '루나 크리스탈 드림';
  const directory = `${basedir}/3.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generatePetPage = async () => {
  await wonderBerryPage();
  await delay(1250, 1080);
  await crystalSweetPage();
  await delay(10, 1780);
  await crystalDreamPage();
};

export default generatePetPage;
