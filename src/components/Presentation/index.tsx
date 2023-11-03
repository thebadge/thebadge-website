import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { colors } from '@thebadge/ui-library';
import { BadgesPreview } from '../Commons/BadgesPreview';
import React from 'react';
import TitleAndSwiperContainer from './addons/TitleAndSwiperContainer';
import PaperButton from './addons/PaperButton';
import VideoButton from './addons/VideoButton';
import DiscordButton from './addons/DiscordButton';

export const Presentation = () => {
  const { t } = useTranslation();

  return (
    <TitleAndSwiperContainer>
      <Stack justifyContent="center" sx={{ flex: 2 }}>
        <Box mb={2}>
          <Typography
            variant={'h1'}
            component="h1"
            color={colors.white}
            sx={{
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            {t('presentation.title')}
          </Typography>
        </Box>
        <Typography variant="body1" component="div" color={colors.white}>
          {t('presentation.description')}
        </Typography>
        <Box sx={{ display: 'flex', mt: 4, columnGap: 2 }}>
          <PaperButton />

          <DiscordButton />

          <VideoButton />
        </Box>
      </Stack>
      <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
        <BadgesPreview />
      </Box>
    </TitleAndSwiperContainer>
  );
};
