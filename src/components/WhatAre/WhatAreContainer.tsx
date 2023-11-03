'use client';
import { Box, styled } from '@mui/material';

const WhatAreContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(12),
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > div': {
    flex: 1,
  },
  [theme.breakpoints.up(1100)]: {
    columnGap: theme.spacing(3),
  },
  [theme.breakpoints.down(1100)]: {
    rowGap: theme.spacing(3),
    flexDirection: 'column',
  },
}));

export default WhatAreContainer;
