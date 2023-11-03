import { MiddleComponentContainer } from './addons';
import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { colors, fonts, SectionLayout, Stepper } from '@thebadge/ui-library';
import communityDecoration from '../../assets/community-decoration.webp';
import StyledFirstLetter from '../Commons/StyledFirstLetter';

export default function CommunityBadge() {
  return (
    <Box>
      <SectionLayout
        sx={{ maxWidth: 'max-content' }}
        backgroundColor={colors.transparent}
        borderColor={colors.green}
        components={[
          {
            component: <TopComponent />,
            options: {
              fitContent: true,
            },
          },
          {
            component: <MiddleComponent />,
            options: {
              withPadding: true,
            },
          },
          {
            component: <BottomComponent />,
            options: {
              sx: {
                m: 2,
              },
            },
          },
        ]}
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

const MiddleComponent = () => {
  const { t } = useTranslation();

  return (
    <MiddleComponentContainer>
      <Typography
        color={colors.white}
        variant="h3"
        component="h4"
        fontWeight={fonts.fontWeightBlack}
        lineHeight="42px"
      >
        {t('badgeCategories.community.title')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="div"
        textAlign="left"
      >
        {t('badgeCategories.community.description')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="div"
        textAlign="left"
      >
        {t('badgeCategories.community.example')}
      </Typography>
    </MiddleComponentContainer>
  );
};

const BottomComponent = () => {
  const { t } = useTranslation();

  const steps = [0, 1, 2, 3, 4, 5, 6, 7].map((stepNumber, i) => {
    return (
      <Stack key={i}>
        <StyledFirstLetter
          variant="title4"
          firstLetterColor={colors.deepPurple}
          color={colors.black}
          textAlign="left"
        >
          {t(`badgeCategories.community.howItWorks.steps.${i}.title`)}
        </StyledFirstLetter>
        <Typography
          variant="body2"
          component="div"
          color={colors.black}
          textAlign="left"
        >
          {t(`badgeCategories.community.howItWorks.steps.${i}.description`)}
        </Typography>
      </Stack>
    );
  });

  return (
    <Stepper
      color="deepPurple"
      minHeight={320}
      backgroundColor="white"
      title={
        <Typography
          variant="title3"
          component="div"
          color={colors.deepPurple}
          sx={{ mb: 1 }}
          fontSize="1.1em"
          textAlign="center"
        >
          {t(`badgeCategories.community.howItWorks.title`)}
        </Typography>
      }
      steps={steps}
    />
  );
};
