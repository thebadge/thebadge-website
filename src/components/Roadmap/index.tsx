import { colors, Roadmap, RoadmapItem } from '@thebadge/ui-library';
import { CustomDivider } from '@/src/components/Commons/Divider';
import { Box, Typography } from '@mui/material';

const roadmapElements: RoadmapItem[] = [
  {
    numberTitle: '01',
    quarterNumber: 'Q3 2023',
    quarterTitle: 'Developing strategic partnerships',
    quarterDescription:
      'Start the beta testing program and marketing pre-launch campaign, with incentives for early adopters. Audit of contracts and testing of the platform.',
    quarterDone: true,
  },
  {
    numberTitle: '02',
    quarterNumber: 'Q4 2023',
    quarterTitle: 'Beta Launch and Marketing Campaign',
    quarterDescription: 'We will be releasing our platform.',
  },
  {
    numberTitle: '03',
    quarterNumber: 'Q1 2024',
    quarterTitle: 'Going Live',
    quarterDescription: 'Platform deployment on Mainnet.',
  },
  {
    numberTitle: '04',
    quarterNumber: 'Q2 2024',
    quarterTitle: 'Third-Party badges launch',
    quarterDescription:
      'Third-party feature deployment to allow Web2 and Web3 to issue their certifications on chain.',
  },
  {
    numberTitle: '05',
    quarterNumber: '2024',
    quarterTitle: 'ZK badges integration',
    quarterDescription:
      "Zero Knowledge feature integration to preserve user's privacy.",
  },
];

const RoadmapSection = () => {
  return (
    <Box
      sx={{
        marginTop: 12,
        marginBottom: 10,
      }}
    >
      <CustomDivider />
      <Typography
        variant="h2"
        component="h3"
        textAlign="center"
        color={colors.white}
      >
        ROADMAP
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 8,
          marginBottom: 4,
          marginTop: 4,
          '.roadmap__year:first-of-type': {
            marginLeft: '-30px',
          },
        }}
      >
        <Roadmap elements={roadmapElements} />
      </Box>
    </Box>
  );
};

export default RoadmapSection;
