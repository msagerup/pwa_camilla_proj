'use client';
import { Suspense } from 'react';

import React from 'react';

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspenseWrapper;
