import React from 'react';
import { Box, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { colors } from '@thebadge/ui-library';
import { BadgeCategoriesInnerContainer } from './addons';

export default function BadgeCategoriesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <Box mt={12}>
      <Typography
        color={colors.white}
        variant="h2"
        component="h2"
        textAlign="center"
      >
        {t('badgeCategories.title')}
      </Typography>
      {/* @ts-ignore */}
      <BadgeCategoriesInnerContainer>{children}</BadgeCategoriesInnerContainer>
    </Box>
  );
}
