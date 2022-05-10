import generateAbilPage from './abil';
import generateBeautyPage from './beauty';
import generateCubePage from './cube';
import generateOutfitPage from './outfit';
import generatePetPage from './pet';
import generateStarPage from './star';

const generateHtml = async () => {
  await generateAbilPage();
  await generateBeautyPage();
  await generateCubePage();
  await generateOutfitPage();
  await generatePetPage();
  await generateStarPage();
};

export default generateHtml;
