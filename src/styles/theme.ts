import { Palette, PaletteMode, ThemeOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface CustomSizes {
    icon: number;
    avatar: number;
  }
  // Palette is used to add custom colors, inside the palette property on the theme
  interface Palette {
    border: string;
    hint: string;
  }
  // Theme is used to add custom properties to the theme itself
  interface Theme {
    customSizes: CustomSizes;
  }
  interface ThemeOptions {
    customSizes: CustomSizes;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    border?: string;
    hint?: string;
  }
}

const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'Mulish',
  h1: {
    fontSize: 96,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '106px',
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '78px',
  },
  h3: {
    fontWeight: 500,
    fontSize: 34,
    lineHeight: '120%',
    letterSpacing: '0.15px',
  },
  h4: {
    fontSize: 21,
    fontWeight: 500,
    lineHeight: '120%',
  },
  h5: {
    fontSize: 20,
    lineHeight: '120%',
  },
  h6: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '21.6px',
  },
  subtitle1: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: '16px',
    fontSize: 14,
  },
  body1: {
    fontSize: 16,
    lineHeight: '140%',
  },
  body2: {
    fontSize: 14,
    lineHeight: '140%',
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '0.01em',
  },
  caption: {
    fontSize: 12,
    lineHeight: '14px',
  },
  overline: {
    fontSize: 10,
    lineHeight: '12px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
};

export type CustomTheme = ThemeOptions & {
  components?: {
    MuiDataGrid: unknown;
  };
};

const defaultTheme: CustomTheme = {
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  customSizes: {
    icon: 21,
    avatar: 92,
  },
  palette: {
    primary: {
      main: '#2D64F1',
      light: '#7491FF',
      dark: '#003BBD',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#252C3C',
      light: '#4e5566',
      dark: '#000016',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ED5956',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ED9829',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0094FF',
    },
    success: {
      main: '#00C083',
      contrastText: '#ffffff',
    },
  },
};

export const getTheme = (mode?: PaletteMode): CustomTheme => ({
  ...defaultTheme,
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderColor: 'grey.300',
          '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
        },
      },
    },
  },
});
