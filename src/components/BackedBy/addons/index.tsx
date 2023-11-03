'use client';
import { Box, styled } from '@mui/material';

export const ContainerBox = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  [theme.breakpoints.up('lg')]: {
    flex: '0 1 17%',
  },
}));

export const BoxBackedBy = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));

export const CustomOrgLink = styled('a')<{ backcolor?: string }>(
  ({ theme, backcolor }) => ({
    background: `${backcolor || 'transparent'}`,
    padding: '12px 16px 0 16px',
    borderRadius: '12px',
  }),
);
