'use client';
import { Box, styled } from '@mui/material';

import React from 'react';
import Headroom from 'react-headroom';
import { BackgroundGradient } from './BackgroundGradient';
import Footer from './Footer';
import Header from './Header';

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .headroom--scrolled': {
    // When header is sticky on scroll, we reduce the size of the padding and the logo
    '& #header-container': {
      paddingTop: theme.spacing(2),
      '& #logo-container': {
        scale: '0.8',
        transformOrigin: 'left center',
      },
    },
  },
}));

type LayoutContainerProps = {
  children: React.ReactNode;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        <>
          {/* @ts-ignore */}
          <Headroom
            style={{
              transition: 'all .5s cubic-bezier(0.83, 0, 0.17, 1)',
            }}
          >
            <Header />
          </Headroom>
          {children}
          <Footer />
        </>
      </Content>
    </div>
  );
};
