import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';
import { delay } from 'libs/time';

const basedir = 'star';

const starNormalPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Star.getNormalParagraphList();
  const CurrentPageTitle = '스타포스 이벤트 미적용';
  const directory = `${basedir}/1.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const starThirtyPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Star.getDiscountThirtyParagraphList();
  const CurrentPageTitle = '스타포스 강화 비용 30% 할인';
  const directory = `${basedir}/2.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const starMultipleFivePage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Star.getMultipleFiveParagraphList();
  const CurrentPageTitle = '스타포스 5, 10, 15성에서 강화 시도 시 성공 확률 100%';
  const directory = `${basedir}/3.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const starUnderTen = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Star.getUnderTenParagraphList();
  const CurrentPageTitle = '10성 이하에서 스타포스 강화 성공 시 1+1 강화';
  const directory = `${basedir}/4.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const starShiningPage = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Star.getShiningParagraphList();
  const CurrentPageTitle = '샤이닝 스타포스 타임';
  const directory = `${basedir}/5.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateStarPage = async () => {
  await starNormalPage();
  await delay(1050, 1627);
  await starThirtyPage();
  await delay(292, 629);
  await starMultipleFivePage();
  await delay(2958, 3622);
  await starUnderTen();
  await delay(29, 260);
  await starShiningPage();
};

export default generateStarPage;
