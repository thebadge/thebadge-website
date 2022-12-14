import {Box, styled} from '@mui/material';
import dynamic from 'next/dynamic';

import {Paragraph} from '../components/Commons/Paragraph';
import {SectionTitle} from '../components/Commons/SectionTitle';
import {TheBadgeSubTitle} from '../components/Commons/Subtitle';
import {
  BadgeCategories,
  BadgePreview,
  BadgeTypesSupported,
  IconEmail,
  IconMedium,
  LogoTheBadge, LogoTheBadgeWithText
} from "thebadge-ui-library";

const BadgeSwipper = dynamic(() => import('../components/Commons/BadgeSwiper'));
const HexagonalDecoration = dynamic(
  () => import('../components/Commons/SVGs/HexagonalDecoration'),
);

const OffchainCard = dynamic(
  () => import('../components/CardType/OffChainCard'),
);
const ThirdPartyCard = dynamic(
  () => import('../components/CardType/ThirdPartyCard'),
);

const Team = dynamic(() => import('../components/Team'));
const BackedBy = dynamic(() => import('../components/BackedBy'));

const MainContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.up('xl')]: {
    width: '70%',
    maxWidth: '1440px',
  },
}));

const SvgDecoration = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  position: 'absolute',
  height: '10%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: -1,
  [theme.breakpoints.down('sm')]: {
    left: '50%',
    transform: 'scale(1.3) translateX(-50%)',
  },
}));

const BoxBadgeTypes = styled(Box)(({ theme }) => ({
  padding: '2% 5% 5% 5%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: 'rgba(0, 0, 0, 0.58)',
  borderRadius: '10px',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const TitleAndSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    flexDirection: 'column',
  },
}));

export default function Home() {
  return (
    <Box>
      <SvgDecoration>
        <HexagonalDecoration />
      </SvgDecoration>
      <MainContainer>
        <TitleAndSwiperContainer>
          <Box sx={{ flex: 2 }}>
            <Box>
              <LogoTheBadge></LogoTheBadge>
              <LogoTheBadgeWithText></LogoTheBadgeWithText>
              <IconEmail link={''} color={'pink'}></IconEmail>
              <IconMedium link={''} color={'pink'}></IconMedium>
              <BadgePreview size={"large"}
                            badgeCategory={BadgeCategories.OFFCHAIN}
                            badgeType={BadgeTypesSupported.CUSTOM}
                            badgeUrl={''}
                            title={''}
                            subline={''}
                            description={''}
                            animationEffects={[]}
              ></BadgePreview>
              <TheBadgeSubTitle as="h1">
                Information certification <br /> & profile identity
              </TheBadgeSubTitle>
            </Box>
            <Paragraph as="h2">
              The Badge is a decentralized certification platform built on
              Ethereum that allows tokenizing any piece of information from the
              real world under the concept of badges. These badges will create
              an on-chain identity by being issued as non-transferable and
              verifiable NFTs.
            </Paragraph>
          </Box>
          <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
            <BadgeSwipper />
          </Box>
        </TitleAndSwiperContainer>
        <BoxBadgeTypes>
          <SectionTitle as="h3">Types of badges</SectionTitle>
          <OffchainCard />
          <ThirdPartyCard />
        </BoxBadgeTypes>
        <Team />
        <BackedBy />
      </MainContainer>
    </Box>
  );
}
