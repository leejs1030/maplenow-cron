import generateAbilPage from './abil';
import generateBeautyPage from './beauty';
import generateCubePage from './cube';
import generateOutfitPage from './outfit';
import generatePetPage from './pet';
import generateStarPage from './star';

const generateHtml = async () => {
  generateAbilPage();
  generateBeautyPage();
  generateCubePage();
  generateOutfitPage();
  generatePetPage();
  generateStarPage();
};

export default generateHtml;
