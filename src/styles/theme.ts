'use client';
import { PaletteMode, ThemeOptions } from '@mui/material';
import {
  Typography,
  TypographyOptions,
} from '@mui/material/styles/createTypography';
import { Mulish } from 'next/font/google';
import { darkTheme, lightTheme } from '@thebadge/ui-library';

const mulishFont = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const getTheme = (mode?: PaletteMode): ThemeOptions => ({
  ...(mode === 'light' ? lightTheme : darkTheme),
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme.palette : darkTheme.palette),
  },
  typography: {
    ...overrideFontFamily(
      mode === 'light' ? lightTheme : darkTheme,
      mulishFont.style.fontFamily,
    ),
  },
  customSizes: {
    avatar: 92,
    icon: 21,
  },
});

export const getTypographyVariants = (
  theme: ThemeOptions,
): (keyof Typography)[] => {
  // Take all the variants, to ensure MUI made all of them responsive, including our custom ones
  return Object.keys(theme.typography as TypographyOptions).filter(
    (keyName) => keyName !== 'fontFamily',
  ) as (keyof Typography)[];
};

export const overrideFontFamily = (
  theme: ThemeOptions,
  fontFamily: string,
): TypographyOptions => {
  let overrideTypography: TypographyOptions = {
    ...theme.typography,
  } as TypographyOptions;
  const variants = getTypographyVariants(theme);
  variants.forEach((variantKey) => {
    // @ts-ignore
    overrideTypography[variantKey].fontFamily = fontFamily;
  });

  return overrideTypography;
};
