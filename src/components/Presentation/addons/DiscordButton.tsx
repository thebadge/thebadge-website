'use client';
import { DISCORD_URL } from '@/src/constants';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Button, styled } from '@mui/material';
import { IconDiscord } from '@thebadge/ui-library';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  gap: '8px',
  '& span': {
    margin: '0',
  },
}));

export default function DiscordButton() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const openDiscordInvite = () => {
    window.open(DISCORD_URL, '_blank');
  };

  return (
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={openDiscordInvite}
      endIcon={<IconDiscord color="white" />}
    >
      {isMobile ? '' : t('presentation.buttons.community')}
    </StyledButton>
  );
}
