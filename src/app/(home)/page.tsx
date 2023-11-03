import BackedBy from '@/src/components/BackedBy';
import BadgeCategoriesContainer from '@/src/components/BadgeCategories/BadgeCateogriesContainer';
import CommunityBadge from '@/src/components/BadgeCategories/Community';
import ThirdPartyBadge from '@/src/components/BadgeCategories/ThirdParty';
import MainContainer from '@/src/components/Commons/MainContainer';
import { Presentation } from '@/src/components/Presentation';
import RoadmapSection from '@/src/components/Roadmap';
import Team from '@/src/components/Team';
import WhatAreCreators from '@/src/components/WhatAre/Creators';
import WhatAreCurators from '@/src/components/WhatAre/Curators';
import WhatsTheBadge from '@/src/components/WhatsTheBadge';
import ReferenceContainer from '@/src/contexts/referencesContext/ReferenceContainer';
import { Box } from '@mui/material';

export default function MainPage() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <MainContainer>
        <ReferenceContainer
          homeSectionComponent={
            <>
              <Presentation />
              <WhatsTheBadge />
            </>
          }
          howItWorksSectionComponent={
            <>
              <BadgeCategoriesContainer>
                <CommunityBadge />
                <ThirdPartyBadge />
              </BadgeCategoriesContainer>
              <WhatAreCurators />
              <WhatAreCreators />
            </>
          }
          roadmapSectionComponent={<RoadmapSection />}
          teamSectionComponent={<Team />}
          partnershipSectionComponent={<BackedBy />}
        />
      </MainContainer>
    </Box>
  );
}
