import { Paragraphs } from 'maplenow-tool';
import writeHtml from 'libs/html/writeHtml';

const basedir = 'abil';

const pointAbility = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Abil.getPointParagraphList();
  const CurrentPageTitle = '명성치(옵션을 고정하지 않은 재설정만 포함)';
  const directory = `${basedir}/1.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const circulatorAbility = async () => {
  const { pageUuid, subPageUuid, paragraphs, description } =
    await Paragraphs.Abil.getCirculatorParagraphList();
  const CurrentPageTitle = '미라클 서큘레이터';
  const directory = `${basedir}/2.html`;
  await writeHtml({ pageUuid, subPageUuid, paragraphs, description, CurrentPageTitle, directory });
};

const generateAbilPage = async () => {
  await pointAbility();
  await circulatorAbility();
};

export default generateAbilPage;
