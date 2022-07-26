import { CustomDivider } from '@/src/components/Commons/Divider';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, styled } from '@mui/material';
import { SectionTitle } from '../Commons/SectionTitle';

const ContainerBox = styled(Box)(({ theme }) => ({
  flex: '1 1 20%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 100%',
  },
}));

const BoxBackedBy = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const CustomOrgLink = styled('a')<{ backcolor: string }>(
  ({ theme, backcolor }) => ({
    background: `${backcolor}`,
    padding: '12px 16px 0 16px',
    borderRadius: '12px',
  }),
);

type Organizations = {
  image: string;
  url: string;
  alt: string;
  backColor: string;
};

const ORGS: Organizations[] = [
  {
    image: '/assets/klerosLogo.png',
    url: 'https://kleros.io/',
    alt: 'Kleros',
    backColor: '#4d00b4',
  },
  {
    image: '/assets/qf_ethlatam.svg',
    url: 'https://qf.ethlatam.org/#/?option=3',
    alt: 'Quadratic Founding ETH Latam',
    backColor: '#121212',
  },
];

const BackedBy = () => {
  const isMobile = useIsMobile();

  return (
    <BoxBackedBy>
      <CustomDivider />
      <SectionTitle as="h3">Backed By</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 3,
          marginBottom: 4,
        }}
      >
        {ORGS.map((org, i) => {
          return (
            <ContainerBox key={i}>
              <CustomOrgLink href={org.url} backcolor={org.backColor}>
                <img
                  src={org.image}
                  alt={org.alt}
                  width={isMobile ? 250 : 350}
                  height={isMobile ? 100 : 150}
                />
              </CustomOrgLink>
            </ContainerBox>
          );
        })}
      </Box>
    </BoxBackedBy>
  );
};

export default BackedBy;
