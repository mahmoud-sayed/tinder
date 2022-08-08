import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

import './style.scss';
const SwipeButtons = () => {
  return (
    <div className='SwipeButtons'>
      <IconButton className='repeat root'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='left root'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='star root'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='right root'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='lightning root'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;