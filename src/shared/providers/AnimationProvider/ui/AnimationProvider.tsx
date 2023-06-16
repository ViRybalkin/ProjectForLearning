import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimationContext } from '../config/AnimationContext';
import { AnimationProviderProps } from './AnimationProvider.types';
import { GestureType, SpringType } from '../config/AnimationContext.types';

const getAsyncAnimationModules = async () => {
  return Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const defaultValue = useMemo(() => {
    return {
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    };
  }, [isLoaded]);

  return <AnimationContext.Provider value={defaultValue}>{children}</AnimationContext.Provider>;
};
