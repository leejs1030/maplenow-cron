import React from 'react';
import { mapletype } from 'maplenow-tool';
import { allPageEnum } from 'custom-type';
import outfitPage from './outfit';
import petPage from './pet';
import starPage from './star';
import cubePage from './cube';
import beautyPage from './beauty';
import abilPage from './abil';

export const SelectPage = ({
  pageNumber,
  subPageNumber,
}: {
  pageNumber: mapletype.pageEnum;
  subPageNumber: allPageEnum;
}) => {
  switch (pageNumber) {
    case mapletype.pageEnum.abil:
      return abilPage(subPageNumber as mapletype.abilPageEnum);
    case mapletype.pageEnum.beauty:
      return beautyPage(subPageNumber as mapletype.beautyPageEnum);
    case mapletype.pageEnum.cube:
      return cubePage(subPageNumber as mapletype.cubePageEnum);
    case mapletype.pageEnum.outfit:
      return outfitPage(subPageNumber as mapletype.outfitPageEnum);
    case mapletype.pageEnum.pet:
      return petPage(subPageNumber as mapletype.petPageEnum);
    case mapletype.pageEnum.star:
      return starPage(subPageNumber as mapletype.starPageEnum);
    default:
      return <div></div>;
  }
};
