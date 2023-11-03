'use client';
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.up('xl')]: {
    width: '80%',
    maxWidth: '1440px',
  },
}));

export default Container;
