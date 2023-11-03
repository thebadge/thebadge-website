import { CustomDivider } from '@/src/components/Commons/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useTranslation from 'next-translate/useTranslation';
import { colors } from '@thebadge/ui-library';
import { BoxBackedBy, ContainerBox, CustomOrgLink } from './addons';

type Organizations = {
  image: string;
  url: string;
  alt: string;
  backColor?: string;
};

const ORGS: Organizations[] = [
  {
    image: '/assets/klerosLogo.png',
    url: 'https://kleros.io/',
    alt: 'Kleros',
  },
  {
    image: '/assets/ethlatam.png',
    url: 'https://ethlatam.org/',
    alt: 'ETH Latam',
  },
  {
    image: '/assets/openvino.png',
    url: 'https://openvino.org/',
    alt: 'OpenVino',
  },
  {
    image: '/assets/austral.png',
    url: 'https://www.austral.edu.ar/',
    alt: 'Universidad Austral',
  },
  {
    image: '/assets/talentlayer.png',
    url: 'https://www.talentlayer.org/',
    alt: 'TalentLayer',
  },
  {
    image: '/assets/request-network.png',
    url: 'https://request.network/',
    alt: 'Request Network',
  },
  {
    image: '/assets/idriss.png',
    url: 'https://www.idriss.xyz/',
    alt: 'Idriss',
  },
  {
    image: '/assets/metavisa.png',
    url: 'https://www.metavisa.com/',
    alt: 'Metavisa',
  },
  {
    image: '/assets/3vo.png',
    url: 'https://3vo.me/',
    alt: '3vo',
  },
];

const BackedBy = () => {
  const { t } = useTranslation();

  return (
    <BoxBackedBy>
      <CustomDivider />
      <Typography
        variant="h2"
        component="h2"
        color={colors.white}
        textAlign="center"
      >
        {t('backedBy.title')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexFlow: 'row wrap',
          marginTop: 6,
          columnGap: 2,
          rowGap: 2,
          marginBottom: 12,
        }}
      >
        {ORGS.map((org, i) => {
          return (
            <ContainerBox key={i}>
              <CustomOrgLink href={org.url} backcolor={org.backColor}>
                <img
                  src={org.image}
                  alt={org.alt}
                  style={{ maxWidth: '150px', maxHeight: '100px' }}
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
