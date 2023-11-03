'use client';
import { useSectionReferences } from '@/src/contexts/referencesContext';
import { ConstructionOutlined } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { RefObject } from 'react';
import {
  gradients,
  LogoTheBadgeWithText,
  NavigationHeader,
} from '@thebadge/ui-library';
import LanguageSwitchLink from '../TranslationUtils/LanguageSwitchLink';
import Link from 'next/link';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  background: gradients.gradientBackgroundDark,
  // With this the header bacnground and page bacnground has the same match
  backgroundSize: '100vw 100vh',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  paddingLeft: '5%',
  paddingRight: 'calc(5% - 16px)',
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '10%',
    paddingRight: 'calc(10% - 16px)',
  },
  [theme.breakpoints.down('sm')]: {
    flex: 1,
  },
  transition: 'padding-top 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
}));

const Header = () => {
  const {
    homeSection,
    howItWorksSection,
    roadmapSection,
    teamSection,
    partnershipSection,
    contactSection,
  } = useSectionReferences();
  const { t } = useTranslation('translations');

  const scrollTo = (
    sectionRef: RefObject<HTMLDivElement> | null,
    adjustOffset?: boolean,
  ) => {
    if (!sectionRef) return;
    const sectionOffset = sectionRef.current?.offsetTop;
    window.scrollTo({
      top: adjustOffset ? (sectionOffset || 0) + 75 : sectionOffset,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderContainer id="header-container">
      <Box
        sx={{
          flex: 1,
        }}
        id="logo-container"
      >
        <Link href="/" style={{ cursor: 'pointer' }} legacyBehavior passHref>
          <a>
            <LogoTheBadgeWithText size={212} />
          </a>
        </Link>

        <Box sx={{ color: 'white.light' }}>
          <LanguageSwitchLink locale="en" />
          {'|'}
          <LanguageSwitchLink locale="es" />
          {'|'}
          <LanguageSwitchLink locale="de" />
        </Box>
      </Box>
      <NavigationHeader
        mobileViewMaxWidth={1180}
        anchorPosition="left"
        items={[
          {
            label: t('header.home'),
            onClick: () => scrollTo(homeSection),
          },
          {
            label: t('header.howItWorks'),
            onClick: () => scrollTo(howItWorksSection),
          },
          {
            label: t('header.roadmap'),
            onClick: () => scrollTo(roadmapSection, true),
          },
          {
            label: t('header.team'),
            onClick: () => scrollTo(teamSection, true),
          },
          {
            label: t('header.partnerships'),
            onClick: () => scrollTo(partnershipSection),
          },
          {
            label: t('header.contactUs'),
            onClick: () => scrollTo(contactSection),
          },
        ]}
        callToActionItem={{
          label: t('header.goToAppButton.label'),
          disabled: true,
          icon: <ConstructionOutlined />,
          tooltip: t('header.goToAppButton.tooltip'),
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
