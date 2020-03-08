import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

/**
 * Detect if app is offline
 *
 * return
 *  - a boolean to true when offline
 */
export const useOffline = (): [boolean] => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    // should work in web, but not working for the moment
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      // detect when offline
      const unsubscribe = NetInfo.addEventListener(state => {
        setOffline(!state.isConnected);
      });
      return (): void => {
        // clean listener
        unsubscribe();
      };
    }
    return (): void => {
      // in web no listener
    };
  }, []);

  return [offline];
};
