'use client';
import { Divider, styled } from '@mui/material';

export const CustomDivider = styled(Divider)(({ theme }) => ({
  borderColor: '#24F3D2', // TODO update using color variable
  marginBottom: theme.spacing(10),
}));
