import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

/**
 * Change the color of the status bar when focus on the screen with the default given
 *
 * @returns
 *        - a function to change the bar style
 */
export const useManageTheStatusBarColor = (defaultStatusBarStyle: StatusBarStyle): Dispatch<SetStateAction<StatusBarStyle>> => {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(defaultStatusBarStyle);
  const navigation = useNavigation();

  const changeStatusBarStyle = useCallback(() => {
    StatusBar.setBarStyle(statusBarStyle);
  }, [statusBarStyle]);

  useEffect(() => {
    StatusBar.setBarStyle(statusBarStyle);
    const unsubscribe = navigation.addListener('focus', changeStatusBarStyle);
    return unsubscribe;
  }, [changeStatusBarStyle, navigation, statusBarStyle]);

  return setStatusBarStyle;
};
