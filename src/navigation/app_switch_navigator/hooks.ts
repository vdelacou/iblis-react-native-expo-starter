import { InitialState, useLinking } from '@react-navigation/native';
import { Linking } from 'expo';
import { useEffect, useState } from 'react';

const prefix = Linking.makeUrl('/');

export const useCreateLinking = (containerRef): [InitialState] => {
  const [initialNavigationState, setInitialNavigationState] = useState<InitialState>();

  const linking = useLinking(containerRef, {
    prefixes: [prefix],
  });

  useEffect(() => {
    const getInitialStateAsync = async (): Promise<void> => {
      const initialState = await linking.getInitialState();
      setInitialNavigationState(initialState);
    };
    getInitialStateAsync();
  }, [linking]);

  return [initialNavigationState];
};
