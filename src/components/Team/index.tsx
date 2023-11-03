'use client';
import { CustomDivider } from '@/src/components/Commons/Divider';
import TBSwiper from '@/src/components/Commons/TBSwiper';
import TeamMemberCard from '@/src/components/Team/TeamMemberCard';
import TeamMemberCardDivider from '@/src/components/Team/TeamMemberCardDivider';
import { Box, Typography, styled } from '@mui/material';
import { colors } from '@thebadge/ui-library';
import useTranslation from 'next-translate/useTranslation';

const BoxTeam = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

export enum ContactType {
  Github = 'Github',
  Twitter = 'Twitter',
  Behance = 'Behance',
  Linkedin = 'Linkedin',
  Email = 'Email',
}

export type TeamMember = {
  avatar?: string;
  name?: string;
  role?: string;
  team?: TeamGroup;
  isDivider?: boolean;
  socials?: { type: ContactType; name: string; color: string }[];
};

export enum TeamGroup {
  FOUNDER = 'Founder',
  CORE_TEAM = 'Team',
  ADVISOR = 'Advisor',
}

const TEAM_MEMBERS: TeamMember[] = [
  { isDivider: true, team: TeamGroup.FOUNDER },
  {
    avatar: '/avatars/agu.webp',
    name: 'Agustín Pane',
    role: 'Co-founder, COO',
    team: TeamGroup.FOUNDER,
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'Agupane',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'agustin@thebadge.xyz',
      },
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'agustin-pane',
      },
    ],
  },
  {
    avatar: '/avatars/fede.webp',
    name: 'Federico Madoery',
    team: TeamGroup.FOUNDER,
    role: 'Co-founder, Product Lead',
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'FedeMadoery',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'federico@thebadge.xyz',
      },
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'federico-madoery',
      },
    ],
  },
  { isDivider: true, team: TeamGroup.CORE_TEAM },
  {
    avatar: '/avatars/cristian.webp',
    name: 'Cristian Malfesi',
    role: 'Business Development Lead',
    team: TeamGroup.CORE_TEAM,
    socials: [
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'cristian@thebadge.xyz',
      },
    ],
  },
  {
    avatar: '/avatars/luciaf.webp',
    name: 'Lucía Fenoglio',
    role: 'Graphics Designer',
    team: TeamGroup.CORE_TEAM,
    socials: [
      {
        color: '#333333',
        type: ContactType.Behance,
        name: 'luciafenoglio',
      },
    ],
  },
  {
    avatar: '/avatars/fer.webp',
    name: 'Fernando Ramirez',
    role: 'Business & Web3 Developer',
    team: TeamGroup.CORE_TEAM,
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'ramabit',
      },
      {
        color: '#333333',
        type: ContactType.Email,
        name: 'fernando@thebadge.xyz',
      },
    ],
  },
  {
    avatar: '/avatars/agulom.webp',
    name: 'Agustín Lombardi',
    role: 'Business Developer',
    team: TeamGroup.CORE_TEAM,
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'agustin-lombardi-485627207',
      },
    ],
  },
  { isDivider: true, team: TeamGroup.ADVISOR },
  {
    avatar: '/avatars/javi.webp',
    name: 'Javier Alba, CFA',
    team: TeamGroup.ADVISOR,
    role: 'Financial Advisor',
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'javier-alba-cfa',
      },
    ],
  },
  {
    avatar: '/avatars/nicom.webp',
    name: 'Nicolás Magri',
    role: 'Legal Advisor',
    team: TeamGroup.ADVISOR,
    socials: [
      {
        color: '#333333',
        type: ContactType.Linkedin,
        name: 'nicolas-magri-2aa0ba15a',
      },
    ],
  },
  {
    avatar: '/avatars/agulon.webp',
    name: 'Agustín Longoni',
    role: 'UX Advisor',
    team: TeamGroup.ADVISOR,
    socials: [
      {
        color: '#333333',
        type: ContactType.Github,
        name: 'alongoni',
      },
    ],
  },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <BoxTeam>
      <CustomDivider />
      <Typography
        variant="h2"
        component="h3"
        textAlign="center"
        color={colors.white}
      >
        {t('team.title')}
      </Typography>

      <Box mt={5}>
        <TBSwiper
          maxSlidesPerView={6}
          spaceBetween={8}
          loop={false}
          items={TEAM_MEMBERS.map((member) => {
            if (member.isDivider)
              return (
                <TeamMemberCardDivider key={member.team} type={member?.team} />
              );
            return (
              <TeamMemberCard
                key={member.name}
                user={member}
                team={member?.team}
              />
            );
          })}
        />
      </Box>
    </BoxTeam>
  );
};

export default Team;
