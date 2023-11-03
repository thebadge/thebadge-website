'use client';

import { useSectionReferences } from '@/src/contexts/referencesContext/index';

type ReferenceContainerProps = {
  homeSectionComponent: React.ReactNode;
  howItWorksSectionComponent: React.ReactNode;
  roadmapSectionComponent: React.ReactNode;
  teamSectionComponent: React.ReactNode;
  partnershipSectionComponent: React.ReactNode;
};
export default function ReferenceContainer({
  homeSectionComponent,
  howItWorksSectionComponent,
  roadmapSectionComponent,
  teamSectionComponent,
  partnershipSectionComponent,
}: ReferenceContainerProps) {
  const {
    homeSection,
    howItWorksSection,
    roadmapSection,
    teamSection,
    partnershipSection,
  } = useSectionReferences();

  return (
    <>
      <div ref={homeSection}>{homeSectionComponent}</div>
      <div ref={howItWorksSection}>{howItWorksSectionComponent}</div>
      <div ref={roadmapSection}>{roadmapSectionComponent}</div>
      <div ref={teamSection}>{teamSectionComponent}</div>
      <div ref={partnershipSection}>{partnershipSectionComponent}</div>
    </>
  );
}
