import { LayoutContainer } from '@/src/components/Layout/LayoutContainer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
