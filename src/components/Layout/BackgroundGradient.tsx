'use client';
import { Box, styled } from '@mui/material';
import { gradients } from '@thebadge/ui-library';

const Background = styled(Box)({
  background: gradients.gradientBackgroundDark,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  position: 'fixed',
  /* z-index usage is up to you.. although there is no need of using it because the default stack context will work. */
  zIndex: -1, // this is optional
});
export const BackgroundGradient = () => {
  return <Background />;
};
