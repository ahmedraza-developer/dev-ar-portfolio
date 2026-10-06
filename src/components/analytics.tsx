"use client";

import React from "react";
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import LoadingScreen from "./ui/loading-screen";

export default function Analytics({ children }: { children: React.ReactNode }) {
  const { client } = useClientAsyncInit(
    "client-aI8j6O8xYDYf6jVkGMPo7GkGXSielN0HIz2XrrDAf43",
    { userID: 'a-user' }, 
    { plugins: [ new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin() ] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<LoadingScreen />}>
      {children}
    </StatsigProvider>
  );
}
