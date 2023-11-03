'use client';
import { PAPER_URL } from '@/src/constants';
import { googleAnalyticsBtn } from '@/src/hooks/useGoogleAnalytics';
import { Button, styled } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  height: '52px',
  textTransform: 'none',
  padding: '9px 26px 9px 26px',
  maxHeight: 'fit-content',
}));

export default function PaperButton() {
  const { t } = useTranslation();

  const openPaperHandler = () => {
    window.open(PAPER_URL, '_blank');
    googleAnalyticsBtn('Read Paper');
  };

  return (
    <StyledButton variant="contained" onClick={openPaperHandler}>
      {t('presentation.buttons.whitepaper')}
    </StyledButton>
  );
}
