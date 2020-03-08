import { t } from 'i18n-js';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OfflineWrapperView } from '../../wrapper/offline_wrapper_view';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const AccountScreen: FC = () => {
  return (
    <OfflineWrapperView>
      <View style={styles.root}>
        <Text>{t('screens.AccountScreen.title')}</Text>
      </View>
    </OfflineWrapperView>
  );
};
