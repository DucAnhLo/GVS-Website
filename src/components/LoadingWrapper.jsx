'use client'
import React from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import LoadingScreen from './LoadingScreen';

const LoadingWrapper = () => {
  const { isLoading } = useLoading();

  return <LoadingScreen isLoading={isLoading} />;
};

export default LoadingWrapper;
