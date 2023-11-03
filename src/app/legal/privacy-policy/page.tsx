'use client';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Container } from '@mui/material';

import PrivacyPolicyMd from '@/markdown/en/privacy.md';

const PrivacyPolicy = () => {
  return (
    <Container fixed sx={{ mb: 4 }}>
      <MDXProvider>
        <PrivacyPolicyMd />
      </MDXProvider>
    </Container>
  );
};

export default PrivacyPolicy;
