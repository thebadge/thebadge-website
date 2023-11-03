import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { colors, Stepper } from '@thebadge/ui-library';
import StyledTypography from '../Commons/StyledFirstLetter';
import WhatAreContainer from './WhatAreContainer';

export default function WhatAreCurators() {
  const { t } = useTranslation();
  //const isMobile = useIsMobile();

  const steps = [0, 1, 2, 3].map((stepNumber, i) => {
    return (
      <Stack key={i}>
        <StyledTypography
          variant="title4"
          color={colors.white}
          firstLetterColor={colors.green}
          textAlign="left"
        >
          {t(`whatAreCurators.earn.steps.${i}.title`)}
        </StyledTypography>
        <Typography
          key="0"
          variant="body2"
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t(`whatAreCurators.earn.steps.${i}.description`)}
        </Typography>
      </Stack>
    );
  });

  return (
    <WhatAreContainer>
      <Stack rowGap={3}>
        <Typography
          variant="body3"
          component="span"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.sectionName')}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.title')}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.description')}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.example')}
        </Typography>
      </Stack>
      <Box>
        <Stepper
          color="green"
          glowTitle={true}
          border={true}
          backgroundColor="transparent"
          title={
            <Typography
              variant="title3"
              component="div"
              color={colors.green}
              sx={{ textShadow: '0 0 0 25px', textTransform: 'none', mb: 1 }}
              textAlign="center"
            >
              {t(`whatAreCurators.earn.title`)}
            </Typography>
          }
          steps={steps}
        />
      </Box>
    </WhatAreContainer>
  );
}
