'use client';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, keyframes, useMediaQuery, useTheme } from '@mui/material';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const growEffect = keyframes`
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;

type TBSwiperProps = {
  items: React.ReactNode[];
  maxSlidesPerView?: number;
  spaceBetween?: number;
  itemsScale?: string;
  leftPadding?: string;
  rightPadding?: string;
  noArrows?: boolean;
} & SwiperProps;

export default function TBSwiper({
  items,
  itemsScale,
  leftPadding,
  maxSlidesPerView,
  noArrows,
  rightPadding,
  spaceBetween,
  ...props
}: TBSwiperProps) {
  let swiperId = 'id1';
  useEffect(() => {
    swiperId = 'id' + Date.now().toString(16);
  });

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down(560));
  const sm = useMediaQuery(theme.breakpoints.down(790));
  const md = useMediaQuery(theme.breakpoints.down(1024));
  const lg = useMediaQuery(theme.breakpoints.down(1300));
  const xl = useMediaQuery(theme.breakpoints.down(1680));

  const amountItems = () => {
    const maxItems = maxSlidesPerView || 4;
    if (xs) {
      return 1;
    } else if (sm) {
      return maxItems < 2 ? maxItems : 2;
    } else if (md) {
      return maxItems < 3 ? maxItems : 3;
    } else if (lg) {
      return maxItems < 4 ? maxItems : 4;
    } else if (xl) {
      return maxItems < 5 ? maxItems : 5;
    } else {
      return maxItems;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {!noArrows && (
        <ArrowBackIosIcon
          className={'tb-swiper-button-prev-' + swiperId}
          sx={{
            cursor: 'pointer',
            mr: leftPadding || '0.5rem',
            height: '35px',
            width: '35px',
            animation: `${growEffect} 1s infinite alternate ${theme.transitions.easing.easeInOut}`,
          }}
        />
      )}

      <Swiper
        grabCursor={true}
        loop={true}
        modules={
          props.modules
            ? [Navigation, A11y, ...props.modules]
            : [Navigation, A11y]
        }
        navigation={{
          nextEl: '.tb-swiper-button-next-' + swiperId,
          prevEl: '.tb-swiper-button-prev-' + swiperId,
        }}
        pagination={{ clickable: true }}
        slidesPerView={amountItems()}
        spaceBetween={spaceBetween || 25}
        {...props}
      >
        {items.map((item, index) => (
          <SwiperSlide key={'swiper-slide-' + swiperId + '-' + index}>
            <Box
              sx={{
                scale: itemsScale || '1',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {/* @ts-ignore */}
              {item}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {!noArrows && (
        <ArrowForwardIosIcon
          className={'tb-swiper-button-next-' + swiperId}
          sx={{
            cursor: 'pointer',
            ml: rightPadding || '0.5rem',
            height: '35px',
            width: '35px',
            animation: `${growEffect} 1s infinite alternate ${theme.transitions.easing.easeInOut}`,
          }}
        />
      )}
    </Box>
  );
}
