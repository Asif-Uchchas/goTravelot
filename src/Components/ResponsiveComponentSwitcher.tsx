// components/ResponsiveComponentSwitcher.tsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveComponentSwitcherProps {
  desktopComponent: React.ReactNode;
  mobileComponent: React.ReactNode;
}

const ResponsiveComponentSwitcher: React.FC<ResponsiveComponentSwitcherProps> = ({ desktopComponent, mobileComponent }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <>{isDesktop ? desktopComponent : mobileComponent}</>;
};

export default ResponsiveComponentSwitcher;
