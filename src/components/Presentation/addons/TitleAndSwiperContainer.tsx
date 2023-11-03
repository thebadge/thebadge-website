'use client';

import { Box, styled } from '@mui/material';

const TitleAndSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    flexDirection: 'column',
    rowGap: theme.spacing(6),
  },
}));

export default TitleAndSwiperContainer;
