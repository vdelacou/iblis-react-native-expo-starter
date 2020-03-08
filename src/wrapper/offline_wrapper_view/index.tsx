import { t } from 'i18n-js';
import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { OfflineView } from '../../components/offline_view';
import { COLORS } from '../../constants/colors';
import { useOffline } from '../../hooks/offline';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background.default,
  },
});

/**
 * Wrapper to all the screens to switch to the offline view when needed
 */
export const OfflineWrapperView: FC<ViewProps> = props => {
  const [offline] = useOffline();

  if (offline === true) {
    return <OfflineView title={t('wrapper.OfflineWrapperView.title')} />;
  }

  return <View style={styles.root}>{props.children}</View>;
};
