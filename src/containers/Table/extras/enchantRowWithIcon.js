import React from 'react';
import FavouriteIndicatorIcon from 'containers/FavouriteIndicatorIcon';
import { getFavouriteIdByCode } from 'utils/dataHelpers';
import { assoc, contains } from 'ramda';

const enchantRowWithIcon = ({ row, savingFavourites, favourites }) => {
  const favouriteId = getFavouriteIdByCode(row.code, favourites);
  const isSaving = contains(row.code, savingFavourites);

  return assoc(
    'add',
    <FavouriteIndicatorIcon
      code={row.code}
      favouriteId={favouriteId}
      isSaving={isSaving}
    />,
    row
  );
};

export default enchantRowWithIcon;
