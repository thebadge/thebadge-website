'use client';
import { Box, keyframes } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image, { StaticImageData } from 'next/image';
import { MultiBadgePreview } from '@thebadge/ui-library';
import enDiplomaCert from '../../assets/badges/en/diploma-cert.webp';
import enIsoCert from '../../assets/badges/en/iso-cert.webp';
import enHoweyTest from '../../assets/badges/en/howey-test.webp';
import esDiplomaCert from '../../assets/badges/es/diploma-cert.webp';
import esIsoCert from '../../assets/badges/es/iso-cert.webp';
import esHoweyTest from '../../assets/badges/es/howey-test.webp';
import deDiplomaCert from '../../assets/badges/de/diploma-cert.webp';
import deIsoCert from '../../assets/badges/de/iso-cert.webp';
import deHoweyTest from '../../assets/badges/de/howey-test.webp';

const BADGES: { [key: string]: Array<StaticImageData> } = {
  en: [enDiplomaCert, enIsoCert, enHoweyTest],
  es: [esDiplomaCert, esIsoCert, esHoweyTest],
  de: [deDiplomaCert, deIsoCert, deHoweyTest],
};

const glow = keyframes`
  from {
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.7))
  }
  to {
    filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.7))
  }
`;

export const BadgesPreview = () => {
  const { lang } = useTranslation();

  return (
    <MultiBadgePreview
      animated={true}
      badges={BADGES[lang]?.map((cardSrc, i) => (
        <Box
          key={'decorative-image-' + i}
          sx={{
            animation: `${glow} 2s infinite alternate cubic-bezier(0.68, -0.6, 0.32, 1.6)`,
          }}
        >
          <Image src={cardSrc} alt={'decorative-image-' + i} />
        </Box>
      ))}
    />
  );
};
