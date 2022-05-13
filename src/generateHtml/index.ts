import generateAbilPage from './abil';
import generateBeautyPage from './beauty';
import generateCubePage from './cube';
import generateOutfitPage from './outfit';
import generatePetPage from './pet';
import generateStarPage from './star';
import { delay } from 'libs/time';

const generateHtml = async () => {
  const abil = await generateAbilPage();
  await delay(1050, 2900);
  const beauty = await generateBeautyPage();
  await delay(970, 2020);
  const cube = await generateCubePage();
  await delay(825, 1836);
  const outfit = await generateOutfitPage();
  await delay(1028, 1500);
  const pet = await generatePetPage();
  await delay(1059, 2098);
  const star = await generateStarPage();
  return [...abil, ...beauty, ...cube, ...outfit, ...pet, ...star];
};

export default generateHtml;
