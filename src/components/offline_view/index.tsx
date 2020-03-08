import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TYPOGRAPHY } from '../../constants/typography';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TYPOGRAPHY.title,
  },
});

/**
 * Display a title and icon when offline
 */
export const OfflineView: FC<OfflineViewProps> = props => {
  return (
    <View style={styles.root}>
      <MaterialCommunityIcons name="wifi-off" size={60} color={COLORS.text.secondary} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export interface OfflineViewProps {
  /**
   * Title to diplay when offline
   */
  title: string;
}
