import generateAbilPage from './abil';
import generateBeautyPage from './beauty';
import generateCubePage from './cube';
import generateOutfitPage from './outfit';
import generatePetPage from './pet';
import generateStarPage from './star';
import { delay } from 'libs/time';

const generateHtml = async () => {
  await generateAbilPage();
  await delay(1050, 2900);
  await generateBeautyPage();
  await delay(970, 2020);
  await generateCubePage();
  await delay(825, 1836);
  await generateOutfitPage();
  await delay(1028, 1500);
  await generatePetPage();
  await delay(1059, 2098);
  await generateStarPage();
};

export default generateHtml;
