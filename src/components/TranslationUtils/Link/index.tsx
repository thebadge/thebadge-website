import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

export default function LinkWithTranslation({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  const { lang } = useTranslation();

  return (
    <Link locale={lang} href={{ pathname: pathname }}>
      {children}
    </Link>
  );
}
