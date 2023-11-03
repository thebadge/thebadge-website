import { LayoutContainer } from '@/src/components/Layout/LayoutContainer';
import { GA_MEASUREMENT_ID } from '@/src/constants';
import SectionReferencesProvider from '@/src/contexts/referencesContext';
import ThemeRegistry from '@/src/contexts/themeRegistry';
import { Metadata } from 'next';
import Script from 'next/script';
import 'node_modules/@thebadge/ui-library/dist/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <SectionReferencesProvider>{children}</SectionReferencesProvider>
        </ThemeRegistry>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GA_MEASUREMENT_ID}');
        `}
        </Script>
      </body>
    </html>
  );
}

/**
 * Read more on https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const title = 'The Badge: decentralized certifications tokenized as NFTs';
  const description =
    'The Badge is a decentralized certification platform powered by Ethereum. It provides users with the opportunity to tokenize any piece of information from the real world in the form of badges. These badges are verified and validated by the community, which decides what should be accepted and what should not be.';
  const twitterHandle = '@thebadgexyz';
  const LANDING_URL = 'https://thebadge.xyz';

  return {
    title: {
      template: '%s | TheBadge',
      default: title, // a default is required when creating a template
    },
    description,
    openGraph: {
      description,
      url: LANDING_URL,
      type: 'website',
      images: [
        {
          url: `${LANDING_URL}/the_badge_banner.webp`,
          width: 1404,
          height: 459,
          type: 'image/webp',
        },
      ],
      videos: [
        {
          url: `${LANDING_URL}/video/TheBadge.mp4`,
          width: 720,
          height: 1280,
          type: 'video/mp4',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: [`${LANDING_URL}/the_badge_banner.webp`],
    },
    icons: {
      icon: [{ rel: 'icon', url: '/favicon.ico' }],
      shortcut: '/favicon.ico',
    },
  };
}
