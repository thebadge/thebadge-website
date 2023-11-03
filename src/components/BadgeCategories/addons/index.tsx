'use client';
import { styled, Box } from '@mui/material';

export const BadgeCategoriesInnerContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: ' flex',
  columnGap: theme.spacing(3),
  '& > div': {
    flex: 1,
    display: 'flex',
  },
  [theme.breakpoints.down(1000)]: {
    rowGap: theme.spacing(6),
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const MiddleComponentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  placeContent: 'center',
  textAlign: 'center',
  rowGap: theme.spacing(3),
  marginTop: theme.spacing(2),
  '& > p': {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
