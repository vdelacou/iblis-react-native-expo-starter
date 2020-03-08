import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { enableScreens } from 'react-native-screens';
import { CONFIG } from './src/config';
import { COLORS } from './src/constants/colors';
import en from './src/i18n/en.json';
import { AppSwitchNavigator } from './src/navigation/app_switch_navigator';
import { useGlobalErrorHandler } from './src/hooks/global_error_handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.default,
  },
});

// init the localization
i18n.fallbacks = true;
i18n.translations = { en };
i18n.defaultLocale = CONFIG.defaultLocale;
i18n.locale = Localization.locale;

// initiate react native screens
enableScreens();

const App: FC = () => {
  // global error catcher (we show message if any problem not catched before)
  useGlobalErrorHandler();

  return (
    <View style={styles.container}>
      {/* We declare all the stores to access it globally */}
      <AppSwitchNavigator />
      {/*  */}
      {/* The message component (use for display error) */}
      <FlashMessage position="top" duration={CONFIG.flashMessageDefaultDuration} />
    </View>
  );
};

export default App;
