'use client';
import { colors, IconDiscord } from '@thebadge/ui-library';
import EmailIcon from '@/src/components/Icons/Email';
import GithubIcon from '@/src/components/Icons/Github';
import MediumIcon from '@/src/components/Icons/Medium';
import TwitterIcon from '@/src/components/Icons/Twitter';
import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '@/src/constants';
import { useSectionReferences } from '@/src/contexts/referencesContext';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Link, Stack, styled, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

export const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  bottom: 0,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.58)',
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: theme.spacing(2),
}));

export const LegalContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: theme.spacing(2),
  color: '#FFF',
  '& a': {
    color: '#FFF',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    rowGap: theme.spacing(1),
  },
}));

const Footer = () => {
  const { contactSection } = useSectionReferences();
  const { t } = useTranslation();

  return (
    <FooterContainer ref={contactSection}>
      <SocialContainer>
        <TwitterIcon link={TWITTER_URL} />
        <GithubIcon link={GITHUB_URL} />
        <MediumIcon link={MEDIUM_URL} />
        <EmailIcon link={EMAIL_URL} />
        <IconDiscord color="white" link={DISCORD_URL} />
      </SocialContainer>
      <LegalContainer sx={{ marginTop: 2 }}>
        <Typography
          variant={useIsMobile() ? 'h6' : 'h5'}
          component="div"
          color={colors.white}
          sx={{
            textAlign: 'center',
          }}
        >
          ©{new Date().getFullYear()} {t('footer.copyright')}
        </Typography>
        <Box sx={{ columnGap: 2, display: 'flex' }}>
          <Link href="/legal/privacy-policy" target="_blank">
            Privacy Policy
          </Link>
        </Box>
      </LegalContainer>
    </FooterContainer>
  );
};

export default Footer;
