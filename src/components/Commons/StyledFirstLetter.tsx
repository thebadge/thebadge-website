'use client';
import React from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';

type StyledFirstLetterProps = TypographyProps & {
  firstLetterColor?: string;
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'firstLetterColor',
})<StyledFirstLetterProps>(({ theme, firstLetterColor }) => ({
  marginBottom: theme.spacing(1),
  '& span': {
    textShadow: '0 0 0 25px',
    color: firstLetterColor,
  },
  '&::first-letter': {
    textShadow: '0 0 0 25px',
    color: firstLetterColor,
  },
}));

export default function StyledFirstLetter(props: StyledFirstLetterProps) {
  function getElement(children: React.ReactNode) {
    if (typeof children === 'string') {
      const [firstWord, ...rest] = children.split(' ');
      if (firstWord?.endsWith('.')) {
        return (
          <>
            <span>{firstWord}</span> {rest.join(' ')}
          </>
        );
      } else return children;
    } else return children;
  }

  return (
    // @ts-ignore
    <StyledTypography {...props}>{getElement(props.children)}</StyledTypography>
  );
}
