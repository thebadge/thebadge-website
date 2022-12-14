// src/pages/_app.tsx
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { useMemo } from 'react';

import { LayoutContainer } from '../components/Layout/LayoutContainer';
import { getTheme } from '../styles/theme';
import { useGoogleAnalytics } from '@/src/hooks/useGoogleAnalytics';

// TheBadge UI Library
import 'node_modules/thebadge-ui-library/dist/index.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
}) as EmotionCache;

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};
const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const theme = useMemo(() => createTheme(getTheme()), []);
  useGoogleAnalytics();
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
