'use client';
import { Box, Stack, styled } from '@mui/material';

export const StyledStepBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: theme.spacing(4),
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
}));

export const StyledStepStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    width: '45%',
  },
}));

export const StyledWhyStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(6),
  rowGap: theme.spacing(2),
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  justifyContent: 'center',
}));
