'use client';

export const googleAnalyticsBtn = (event: string) => {
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('event', 'click', {
      event_category: 'Click',
      event_label: event,
    });
  }
};
