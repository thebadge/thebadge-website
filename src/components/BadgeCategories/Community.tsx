import { Box, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { colors, SectionLayout, Stepper } from 'thebadge-ui-library';
import communityDecoration from '../../assets/community-decoration.webp';
import StyledTypography from '../Commons/StyledFirstLetter';

export default function CommunityBadge() {
  return (
    <Box>
      <SectionLayout
        topComponent={<TopComponent />}
        middleComponent={<MiddleComponent />}
        bottomComponent={<BottomComponent />}
        borderColor="green"
        backgroundColor="transparent"
      />
    </Box>
  );
}

const TopComponent = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        placeContent: 'center',
        alignItems: 'center',
        background:
          'url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)',
      }}
    >
      <Image
        src={communityDecoration}
        alt="Community Badges decoration"
        height={350}
      />
    </Box>
  );
};

const StyledMiddleComponentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  placeContent: 'center',
  textAlign: 'center',
  rowGap: theme.spacing(3),
  marginTop: theme.spacing(2),
  '& > p': {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const MiddleComponent = () => {
  const { t } = useTranslation('landing');

  return (
    <StyledMiddleComponentContainer>
      <Typography
        color={colors.white}
        variant="h3"
        component="h4"
        fontWeight={900}
      >
        {t('badgesCategories.community.title')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="p"
        textAlign="left"
      >
        {t('badgesCategories.community.description')}
      </Typography>
    </StyledMiddleComponentContainer>
  );
};

const BottomComponent = () => {
  const { t } = useTranslation('landing');

  return (
    <Stepper
      color="deepPurple"
      elements={[0, 1, 2, 3, 4, 5, 6, 7, 8].map((stepNumber, i) => {
        return (
          <Stack key={i}>
            <StyledTypography
              variant="title4"
              firstLeterColor={colors.deepPurple}
              color={colors.black}
              textAlign="left"
            >
              {t(`badgesCategories.community.howItWorks.steps.${i}.title`)}
            </StyledTypography>
            <Typography
              variant="body4"
              component="p"
              color={colors.black}
              textAlign="left"
            >
              {t(
                `badgesCategories.community.howItWorks.steps.${i}.description`,
              )}
            </Typography>
          </Stack>
        );
      })}
      minHeight={280}
      backgroundColor="white"
      title={
        <Typography
          variant="title3"
          component="p"
          color={colors.deepPurple}
          sx={{ mb: 1 }}
          fontSize="1.1em"
          textAlign="center"
        >
          {t(`badgesCategories.community.howItWorks.title`)}
        </Typography>
      }
    />
  );
};
