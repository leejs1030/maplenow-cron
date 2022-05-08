// import React from 'react';
// import { mapletype } from 'maplenow-tool';
// import { allPageEnum } from 'custom-type';
// import outfitPage from './outfit';
// import petPage from './pet';
// import starPage from './star';
// import CubePage from './cube';
// import beautyPage from './beauty';
// import abilPage from './abil';
// import { NextPage } from 'next';
// import cubePage from './cube';
//
// export const SelectPage: NextPage<{
//   pageNumber: mapletype.pageEnum;
//   subPageNumber: allPageEnum;
// }> = ({ pageNumber, subPageNumber }) => {
//   switch (pageNumber) {
//     case mapletype.pageEnum.abil:
//       return abilPage(subPageNumber as mapletype.abilPageEnum);
//     case mapletype.pageEnum.beauty:
//       return beautyPage(subPageNumber as mapletype.beautyPageEnum);
//     case mapletype.pageEnum.cube:
//       return cubePage(mapletype.pageEnum.cube as mapletype.cubePageEnum);
//     case mapletype.pageEnum.outfit:
//       return outfitPage(subPageNumber as mapletype.outfitPageEnum);
//     case mapletype.pageEnum.pet:
//       return petPage(subPageNumber as mapletype.petPageEnum);
//     case mapletype.pageEnum.star:
//       return starPage(subPageNumber as mapletype.starPageEnum);
//     default:
//       return <div></div>;
//   }
// };
