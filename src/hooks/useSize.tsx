'use client';
import { useMediaQuery, useTheme } from '@mui/material';

const useSizeSM = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

const useSizeMD = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

const useSizeLG = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
};

const useSizeXL = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('xl'));
};

export { useSizeSM, useSizeMD, useSizeLG, useSizeXL };
