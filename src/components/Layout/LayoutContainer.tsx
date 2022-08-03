import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { DownloadPaperButton } from '../Commons/DownloadPaperButton';
import { BackgroundGradient } from './BackgroundGradient';
import { TheBadgeLogo } from './TheBadgeLogo';
import { Footer } from '../Footer';

const Content = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
});

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
}));

type LayoutContainerProps = {
  children: React.ReactElement;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        <HeaderContainer>
          <TheBadgeLogo />
          <DownloadPaperButton />
        </HeaderContainer>
        {children}
        <Footer>
          <Typography>Social Media</Typography>
        </Footer>
      </Content>
    </div>
  );
};