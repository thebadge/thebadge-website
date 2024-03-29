import { DISCORD_URL, PAPER_URL, VIDEO_URL } from '@/src/constants';
import { useGoogleAnalyticsBtn } from '@/src/hooks/useGoogleAnalytics';
import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { colors, IconDiscord } from '@thebadge/ui-library';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { BadgesPreview } from '../Commons/BadgesPreview';
import React from 'react';
import { useIsMobile } from '@/src/hooks/useIsMobile';

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

const StyledButton = styled(Button)(({ theme }) => ({
  height: '52px',
  textTransform: 'none',
  padding: '9px 26px 9px 26px',
  maxHeight: 'fit-content',
}));

const DiscordButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  gap: '8px',
  '& span': {
    margin: '0',
  },
}));

const VideoButton = styled(Button)(({ theme }) => ({
  '& span': {
    margin: '0',
  },
  '& svg': {
    fontSize: 'xx-large !important',
  },
}));

export const Presentation = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const googleAnalyticsBtn = useGoogleAnalyticsBtn();

  const openPaperHandler = () => {
    window.open(PAPER_URL, '_blank');
    googleAnalyticsBtn('Read Paper');
  };

  const openDiscordInvite = () => {
    window.open(DISCORD_URL, '_blank');
  };
  const openVideo = () => {
    window.open(DISCORD_URL, '_blank');
  };

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
          <StyledButton variant="contained" onClick={openPaperHandler}>
            {t('presentation.buttons.whitepaper')}
          </StyledButton>

          <DiscordButton
            variant="contained"
            color="secondary"
            onClick={openDiscordInvite}
            endIcon={<IconDiscord color="white" />}
          >
            {useIsMobile() ? '' : t('presentation.buttons.community')}
          </DiscordButton>

          <VideoButton
            variant="contained"
            color="info"
            onClick={handleOpen}
            endIcon={<PlayCircleOutlineRoundedIcon color="white" />}
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="TheBadge"
            aria-describedby="TheBadge video"
          >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '385px', padding: '16px' }}>
              <CardMedia component="video" controls src={VIDEO_URL} autoPlay />
            </Box>
          </Modal>
        </Box>
      </Stack>
      <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
        <BadgesPreview />
      </Box>
    </TitleAndSwiperContainer>
  );
};
